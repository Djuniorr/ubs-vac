import { createContext, useState, useCallback } from "react";
import axios from "axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [ubsList, setUbsList] = useState([]);
    const [vacinasList, setVacinasList] = useState([]); 

    const signin = async (email, password) => {
        try {
            const response = await axios.post("API_HOST/login", {
                email: email,
                password: password,
            });

            if (response.status === 200) {
                setUser({ email });
                return;
            }

            return 'Usuário ou senha incorretos'
        } catch (error) {
            if (error.response && error.response.status === 404) {
                return "E-mail ou senha incorretos";
            } else {
                return "Ocorreu um erro inesperado";
            }
        }
    };

    const signup = async (email, password) => {
        try {
            const response = await axios.post("API_HOST/register", {
                email: email,
                password: password,
            });

            if (response.status === 201) {
                setUser({ email });
                return;
            }

            return 'Erro ao criar conta, tente mais tarde'
        } catch (error) {
            if (error.response && error.response.status === 400) {
                return "Conta já existente";
            } else {
                return "Ocorreu um erro inesperado";
            }
        }
    };

    const signout = async () => {
        setUser(null);
    }

    const getUbs = useCallback(async () => {
        try {
            const response = await axios.get("API_HOST/ubs");
            setUbsList(response.data);
        } catch (error) {
            if (error.response) {
                return "Erro ao buscar lista de UBSs";
            }
        }
    }, []);

    const getUbsWithVacinas = useCallback(async () => {
        try {
            const response = await axios.get("API_HOST/ubsWithVacinas");
            setVacinasList(response.data);
        } catch (error) {
            if (error.response) {
                return "Erro ao buscar lista de UBSs com vacinas"
            }
        }
    }, []);

    return (
        <AuthContext.Provider
        value={{ user, signed: !!user, signin, signup, signout, getUbs, getUbsWithVacinas, ubsList, vacinasList }}
        >
            {children}
        </AuthContext.Provider>
    );
};
