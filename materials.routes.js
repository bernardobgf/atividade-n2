import  Router  from "express";

const router = Router()

let materials = [{ id: "0", name: "folha A4", quantity: "100" },
{ id: "1", name: "caneta preta", quantity: "120" },
{ id: "2",name: "cola bastao", quantity: "89" }]

router.get("/", (req, res) => {
    res.status(200).json(materials)
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    
    const material = materials.find(m => m.id === id)

    if(!material){
        res.status(404).json({message:"material nao encontrado"})
    }

    res.status(200).json(material)
})

router.post("/", (req, res) => {
    const new_material = {id: materials.length, ...req.body}

    materials.push(new_material)
    res.status(201).json(new_material)
})

router.put("/:id", (req, res) => {
    const id = req.params.id

    const material = materials.findIndex(m => m.id === id)

    if(material === -1){
        return res.status(404).json({message:"Nao encontrado"})
    }

    materials[material] = {...materials[material], ...req.body}
    res.status(200).json(materials[material])
})

router.delete("/:id", (req, res) => {
    const id = req.params.id

    const material = materials.findIndex(m => m.id === id)

    if(material === -1){
        return res.status(404).json({message:"Material nao encontrado ou excluido"})
    }

    materials.splice(material, 1)
    res.status(204).send()
})


export default router