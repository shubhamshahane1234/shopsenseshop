import type { NextApiRequest, NextApiResponse } from 'next'
import Product from '@/models/Product'
import connectDb from '@/middleware/Mongoose'  



const  handler =async (
    req: NextApiRequest,
    res: NextApiResponse
  ) =>{
    let products = await Product.find()
    let tshirts:any = {}
for(let item of products){
 

  if(item.title in tshirts){
    if(!tshirts[item.title].color?.includes(item.color) && item.availableQty > 0){
      tshirts[item.title].color.push(item.color)

    }
    if(!tshirts[item.title].size?.includes(item.size) && item.availableQty > 0){
      tshirts[item.title].size.push(item.size)

    }

  }
else {
  tshirts[item.title] = JSON.parse(JSON.stringify(item))
  if(item.availableQty > 0){
    tshirts[item.title].color = [item.color]
    tshirts[item.title].size = [item.size]
  }

}
}


   res.status(200).json({tshirts})
  }


  export default connectDb(handler)



