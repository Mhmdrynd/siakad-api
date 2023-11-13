const {Mahasiswa,Dosen,MahasiswaBimbingan} = require('../models');
const mahasiswaBimbinganController = {}

/*
    this is auto generate example, you can continue 

*/
mahasiswaBimbinganController.index = async(req,res) => {
    res.json({
        message : "Hello mahasiswaBimbinganController"
    })
}

mahasiswaBimbinganController.create = async (req,res) => {
    const {id_mahasiswa,id_dosen} = req.body;
    try {
        const getMahasiswa = await Mahasiswa.findOne({
            where : {
                id : id_mahasiswa
            }
        })
        const getDosen = await Dosen.findOne({
            where : {
                id : id_dosen
            }
        })
    if (getDosen === null || getMahasiswa === null) {
        throw Error("Data Tidak Ditemukan !")
    }else {
        const createMahasiswaBimbingan = await MahasiswaBimbingan.create({
            id_dosen : getDosen.id,
            id_mahasiswa : getMahasiswa.id
        })
        return res.status(201).json({
            message : 'Data Berhasil Ditambahkan !'
        }) 
    }
    } catch (error) {
        return res.status(404).json({
            message : error.message
        })
    }
}

mahasiswaBimbinganController.getAll = async (req,res) => {
    const getAllMhsBimbingan = await Mahasiswa.findAll({
        include : [
            {
            model : Dosen
            }
        ]
    });
    res.json({
        data : getAllMhsBimbingan
    })
}

mahasiswaBimbinganController.getById = async (req,res) => {
    const {id} = req.params
    const getMhsBimbinganById = await Mahasiswa.findOne({
        include : [
            {
                model : Dosen
            }
        ],
        where : {
            id : id
        }
    })
    res.json({
        data : getMhsBimbinganById
    })
}

mahasiswaBimbinganController.update = async (req,res) => {
    const {id_dosen,id_mahasiswa} = req.body
    const {id} = req.params
    try {
        const getDosen = await Dosen.findOne({
            where : {
                id : id_dosen
            }
        })
        const getMahasiswa = await Mahasiswa.findOne({
            where : {
                id : id_mahasiswa
            }
        })
        if (getDosen === null || getMahasiswa === null) {
            throw Error("Data Tidak Ditemukan !")
        }else {
            const createMhsBimbingan = await MahasiswaBimbingan.update({
                id_dosen : getDosen.id,
                id_mahasiswa : getMahasiswa.id
            },{
                where : {
                    id : id
                }
            })
            return res.status(201).json({
                message : 'Data Berhasil Diubah !'
            })
        }
    } catch (error) {
        return res.status(404).json({
            message : error.message
        })
    }
}

mahasiswaBimbinganController.delete = async (req,res) => {
    const {id} = req.params
    try {
        const deleteMhsBimbingan = await MahasiswaBimbingan.destroy({
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
module.exports = mahasiswaBimbinganController

