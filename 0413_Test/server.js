const express = require("express")	//express 요청

	const app = express()		//express 요청 값 저장

	const PORT = process.env.PORT || 4000; //PORT 번호 저장 , PORT번호는 4000번 또는 자동
    const db = require('./database/db.js')

    app.get('/api/get/get_product:product_name',(req,res)=>{
        db.query(`select * from notebook where name="${req.params.product_name}"`,(err,data)=>{
            if(!err){//오류없을때
                // console.log(data)
                res.send({Product:data})
                //res.send({hello:'hello response'})
                //response.send
                //서버의 응답인데,App로 넘어간다.
            }else{//오류가있으면
                console.log(err)
            }
        })
    })


	app.listen(PORT, ()=>{ //포트 listen
    		console.log(`Server On:http://localhost: ${PORT}`)
	})