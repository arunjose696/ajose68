const tf = require('@tensorflow/tfjs');
console.log("sad")
var model
async function initialize() {
            const modelurl = "https://modelflowers.s3.amazonaws.com/model.json";
            model = await tf.loadLayersModel(modelurl);
            console.log(model.summary());
            
}
initialize()
console.log("hey");

exports.lambda_handler =  async function(event, context) {
  console.log("EVENT: \n" + JSON.stringify(event, null, 2))
  return context.logStreamName
}

