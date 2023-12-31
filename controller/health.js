
const getApiHealth = async(req, res)=>{
    return res.json({
      success:true,
      message:'server is running', 
    });

}
export  {getApiHealth};