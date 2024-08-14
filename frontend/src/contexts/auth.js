import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    const signin = async (email, password) => {
        try {
            const response = await axios.post("http://localhost:8800/login", {
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

    const signup = async (email, confirmEmail, password) => {
        try {
            const response = await axios.post("http://localhost:8800/register", {
                email: email,
                confirmEmail: confirmEmail,
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

    const signout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signin, signup, signout }}
        >
            {children}
        </AuthContext.Provider>
    );
};
