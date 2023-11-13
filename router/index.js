const express = require("express");
const exampleController = require("../controller/exampleController");
const routeMahasiswa = require("./mahasiswa");
const routeDosen = require("./Dosen");
const routeMatkul = require("./matakuliah");
const routeDsnMat = require("./dosenMatkul");
const routeJdwlMat = require("./jadwalmatkul");
const routeMhsBimbingan = require("./mahasiswabimbingan")
const route = express.Router()

route.get('/',exampleController.index)
route.use('/mahasiswa',routeMahasiswa)
route.use('/dosen',routeDosen)
route.use('/matkul',routeMatkul)
route.use('/dosen-matkul',routeDsnMat)
route.use('/jadwal-matkul',routeJdwlMat)
route.use('/mahasiswa-bimbingan',routeMhsBimbingan)

module.exports = route