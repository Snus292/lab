const express = require('express');
const router = express.Router();
const chemEquipmentController = require('../controllers/chemEquipmentController'); // Путь к вашему контроллеру

// Создание нового оборудования
router.post('/', chemEquipmentController.createChemEquipment);

// Получение всех единиц оборудования
router.get('/', chemEquipmentController.getAllChemEquipments);

// Получение оборудования по уникальному идентификатору
router.get('/:id', chemEquipmentController.getChemEquipmentById);

// Обновление информации об оборудовании по уникальному идентификатору
router.put('/:id', chemEquipmentController.updateChemEquipment);

// Удаление оборудования по уникальному идентификатору
router.delete('/:id', chemEquipmentController.deleteChemEquipment);

module.exports = router;