import express from 'express'
import ajv from 'ajv'
import * as testController from '../controllers/ajv.controllers'


const router = express.Router();
const ajvValidator = new ajv();

ajvValidator.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));

var schema = {
    
     properties: {
         name: { type: "string" },
         lastname: { type: "string", "minimum": 3, "maximum":25 },
         fathersname:{ type: "string", "minimum":3, "maximum":25 },
         mothersname:{ type: "string", "minimum":3, "maximum":25 },
         email:{ format:"email" },
         username:{ type:"string", minimum:3, maximum:25},
         password:{ type:"string", minimum:3},
         age: { type:"number" },
         city: { type:"string" },
         country: { type:"string" },
         birthday: { format:"date" },
         identification:{ type:"number"},
         telephone:{ type:"number",positive:true,integer:true},
         domain:{ format:"url" },
         mac:{ type:"string"},
         firstDate:{ format:"date", formatMinimum:"2020-01-01", formatExclusiveMinimum: true},
         lastDate:{ format:"date", formatMaximum:"2020-12-31", formatExclusiveMaximum: true},
         profession:{ type:"string"},
         salary:{ type: "number"},
   }
    
};

var validate = ajvValidator.compile(schema);



test({
    
    name: "abc",
    lastname: "bakar",
    fathersname:"deneme",
    mothersname:"deneme",
    email:"asdawd@awdawd.com",
    username:"awdaw123@$%1123-.",
    password:"deneme123#",
    age:23,
    city:"izmir",
    country:"turkey",
    birthday:"2020-10-10",
    identification:21451231,
    telephone:5555555555,
    domain:'https://example.com/',
    mac:"213:ab:123:va",
    firstDate:"2021-12-11",
    lastDate:"2021-01-01",
    profession:"engineer",
    salary:1200




});


console.time("Result Time: ");

function test(data:any) {

    

    var valid = validate(data);
    if (valid) console.log('Valid!');
    else console.log('Invalid: ' + ajvValidator.errorsText(validate.errors));

    
  }
  console.timeEnd("Result Time: ");
  

router.get('/test',testController.deneme)

router.post('/test',[
    
    //api


  ],testController.postDeneme)
  



export default router;