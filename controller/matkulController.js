const {MataKuliah} = require("../models")

const matkulController = {}

/*
    this is auto generate example, you can continue 

*/
matkulController.index = async(req,res) => {
    res.json({
        message : "Hello matkulController"
    })
}
matkulController.create = async (req,res) => {
    const {nama,matkul,sks} = req.body
    try {
        const createMatkul = await MataKuliah.create({
            nama : nama,
            matkul : matkul,
            sks : sks
        })
        return res.status(201).json({
            message : 'Data Berhasil Ditambahkan !'
        })
    } catch (error) {
        return res.status(500).json({
            message : error
        })
    }
}

matkulController.getAll = async (req,res) => {
    try {
        const getMatkul = await MataKuliah.findAll({
            // order : (["createAt","DESC"])
        })
        return res.status(200).json({
            data : getMatkul
        })
    } catch (error) {
        return res.status(500).json({
            message : error
        })
    }
}

matkulController.getById = async (req,res) => {
    const {id} = req.params
    try {
        const getDetailMatkul = await MataKuliah.findOne({
            where : {
                id : id
            }
        })
        return res.status(200).json({
            data : getDetailMatkul
        })
    } catch (error) {
        return res.status(500).json({
            message : error
        })
    }
}

matkulController.update = async (req,res) => {
    const {nama,matkul,sks} = req.body
    const id = req.params.id
    try {
        const getDetailMatkul = await MataKuliah.findOne({
            where : {
                id : id
            }
        })
        if(getDetailMatkul === null) {
            return res.status(404).json({
                message : 'Data Tidak Ditemukan !'
            })
        }
        const updateMatkul = await MataKuliah.update({
            nama : nama,
            matkul : matkul,
            sks : sks
        },{
            where : {
                id : id
            }
        })
        return res.status(200).json({
            message : 'Data Berhasil Diubah !'
        })
    } catch (error) {
        return res.status(500).json({
            message : error
        })
    }
}

matkulController.delete = async (req,res) => {
    const {id} = req.params
    try {
        const deleteMatkul = await MataKuliah.destroy({
            where : {
                id : id
            }
        })
        return res.status(200).json({
            message : 'Data Berhasil Dihapus !'
        })
    } catch (error) {
        return res.status(500).json({
            message : error
        })
    }
}
module.exports = matkulController

