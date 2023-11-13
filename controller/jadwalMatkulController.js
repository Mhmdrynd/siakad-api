const {MataKuliah,JadwalMataKuliah} = require("../models")
const jadwalmatakuliah = require('../models/jadwalmatakuliah')

const jadwalMatkulController = {}

/*
    this is auto generate example, you can continue 

*/
jadwalMatkulController.index = async(req,res) => {
    res.json({
        message : "Hello jadwalMatkulController"
    })
}

jadwalMatkulController.create = async (req,res) => {
    const {id_matkul,hari,jam} = req.body;
    try {
        const getJadwalMatkul = await MataKuliah.findOne({
            where : {
                id : id_matkul
            }
        })
    if (getJadwalMatkul === null) {
        throw Error("Data Tidak Ditemukan !")
    }else {
        const createJdwlMat = await JadwalMataKuliah.create({
            id_matkul : getJadwalMatkul.id,
            hari : hari,
            jam: jam
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

jadwalMatkulController.getAll = async (req,res) => {
    const getJadwalMatkul = await MataKuliah.findAll({
        include : [
            {
            model : JadwalMataKuliah
            }
        ]
    });
    res.json({
        data : getJadwalMatkul
    })
}

// jadwalMatkulController.getById = async (req,res) => {
//     const {id} = req.params;
//     try {
//         const getJadwalMatkulByid = await JadwalMataKuliah.findOne({
//             where : {
//                 id : id
//             },
//             include: [{
//                 model: MataKuliah
//             },]
//         })
//         if (getJadwalMatkulByid === null) {
//             throw Error('Data yang ada masukan tidak ada !')
//         } else {
//             return req.status(200).json({
//                 data: getJadwalMatkulByid
//             })
            
//         }
        
//     } catch (error) {
//         return res.status(500).json({
//             message:error.message
//         })        
//     }
// }

jadwalMatkulController.getById = async (req,res) => {
    const {id} = req.params
    const getJadwalMatkulByid = await JadwalMataKuliah.findOne({
        include : [
            {
                model : MataKuliah
            }
        ],
        where : {
            id : id
        }
    })
    res.json({
        data : getJadwalMatkulByid
    })
}

jadwalMatkulController.update = async (req,res) => {
    const {id_matkul, hari,jam} = req.body
    const {id} = req.params
    try {
        const getJadwalMatkul = await MataKuliah.findOne({
            where : {
                id : id_matkul
            }
        })
        if (getJadwalMatkul === null) {
            throw Error("Data Tidak Ditemukan !")
        }else {
            const updateJadwalMatkul = await JadwalMataKuliah.update({
                id_matkul : getJadwalMatkul.id,
                hari: hari,
                jam: jam
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

jadwalMatkulController.delete = async (req,res) => {
    const {id} = req.params
    try {
        const deleteJadwalMatkuliah = await JadwalMataKuliah.destroy({
            where : {
                id : id
            }
        })
        return res.status(200).json({
            message : 'Data Berhasil Dihapus !'
        })
    } catch (error) {
        return res.status(500).json({
            message : error.message
        })
    }
}

module.exports = jadwalMatkulController

