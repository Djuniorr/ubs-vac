import { db, ubs_db } from "../db.js";

export const validateLogin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const query = "SELECT * FROM usuarios WHERE email = ? AND password = ?";

    db.query(query, [email, password], (err, data) => {
        
        if (err) return res.status(500).json();

        if (data && data.length>0) {
            return res.status(200).json()
        };

        return res.status(404).json();
    });
};

export const createLogin = (req, res) => {
    const password = req.body.password;

    const checkQuery = "SELECT * FROM usuarios WHERE email = ?";
    db.query(checkQuery,[email], (err, data) => {
        if (err) return res.status(500).json();
        if (data && data.length>0) {
            return res.status(400)
        };
    })

    const insertQuery = "INSERT INTO usuarios (email, password) VALUES (?, ?)";
    db.query(insertQuery, [email, password], (err, result) => {
        if (err) return res.status(500).json();
        return res.status(201).json();
    });
}

export const getUbs = (req, res) => {
    const query = "SELECT * FROM ubs";
    ubs_db.query(query, (err, result) => {
        if (err) return res.status(500).json();
        return res.status(200).json(result);
    })

}