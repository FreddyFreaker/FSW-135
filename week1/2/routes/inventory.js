const express = require('express')
const inventory = require('../models/inventory.js')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')


//get all
inventoryRouter.get("/", (req, res, next) => {
   Inventory.find((err, items) =>{
        if(err){
        res.status(500)
        return next(err)
   }
   return res.status(200).send(items)
   })

})

//get one
inventoryRouter.get("/:itemId", (req,res,next) =>{
   const itemId = req.params.itemId
   const foundItem = Items.find( inventory => inventory._id === itemId)
   if(!foundItem){
      const error = new Error(`The item with id ${itemId} was not found`)
      res.status(500)
      return next(error)
   }
   return res.status(200).send(foundItem)
})


inventoryRouter.post("/" , (req, res, next) => {
   const newItem = new Inventory(req.body)
   newItem.save((err, savedItem) =>{
      if(err){
         res.status(500)
         return next(err)
     }
     return res.status(201).send(savedItem)
   })
})


inventoryRouter.delete("/:itemId", (req,res,next) =>{
   Inventory.findOneAndDelete({_id: req.params.itemId},(err, deletedItem) =>{
      if(err){
         res.status(500)
         return next(err)
     }
     return res.status(200).send(`Successfully deleted ${deletedItem.name} item from the database`)
   })
})

inventoryRouter.put("/:itemId", (req,res,next) =>{
   Inventory.findOneAndUpdate(
      {_id: req.params.itemId },
      req.body, 
      {new: true},
      (err, updatedItem) =>{
         if(err) {
            res.status(500)
            return next(err)
         }
         return res.status(201).send(updatedItem)
      }
   )
})

module.exports = inventoryRouter