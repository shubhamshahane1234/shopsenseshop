import type { NextApiRequest, NextApiResponse } from 'next'
import Product from '@/models/Product'
import connectDb from '@/middleware/Mongoose'  

const  handler =async ( req: NextApiRequest, res: NextApiResponse ) =>{
    if(req.method == "POST"){console.log(req.body)
        for(let i=0;i<req.body.length;i++){
       let p = await Product.findByIdAndUpdate(req.body[i]._id,req.body[i]) 
          
            }
          
            res.status(200).json({message:` products updates`})
    }else { res.status(400).json({error:"bad request"})}

  }


  export default connectDb(handler)

