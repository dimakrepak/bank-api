const fs = require('fs');
const bankJson = require('../bank.json');

const getUsers = (req, res) => res.status(200).json({ users: bankJson.users });

const addUser = (req, res) => {
    const { id } = req.body;
    let user = bankJson.users.find(u => u.id === id);
    const userObj = {
        id: id,
        cash: 0,
        credit: 0
    }

    if (!id) res.status(200).json('add id pls');
    else if (user) res.status(200).json('user exists');
    else {
        bankJson.users.push(userObj);
        fs.writeFileSync('bank.json', JSON.stringify(bankJson));
        res.status(200).json({ success: 'user added successfully' });
    }


}

module.exports = {
    getUsers,
    addUser
}