import { question } from 'readline-sync'

function displayOptions(array) {
  let i = 0
  while (i < 3) {
    console.log(i + '. ' + array[i])
    // i += 1
    i = i + 1
  }
}
function getPrice(option) {
    return parseInt(option.split('RM ')[1])
    }
    
console.log('Choose your Resolution')
const resOptions = [
  '1920 x 1080 : RM 300',
  '2560 x 1440 : RM 600',
  '3280 x 1680 : RM 900',
]
displayOptions(resOptions)
let ansRes = question('Select resOptions index\n')

console.log('Choose your Video Card')
const videoCardOptions = [
  'nVdia: RM 600',
  'AMD Radeon: RM 550',
  'Intel: RM 500',
]
displayOptions(videoCardOptions)
let ansVC = question('Select Video Card index\n')

console.log('Choose your Processor')
const processorOptions = ['i3: RM 100', 'i5: RM 300', 'i7: RM 500']
displayOptions(processorOptions)
let ansProcessor = question('Select Processor index\n')

console.log('Choose your Hard Disk')
const hddOptions = ['128GB: RM 100', '256GB: RM 200', '1TB : RM 300']
displayOptions(hddOptions)
let ansHDD = question('Select HDD index\n')

const prices = [
    resOptions[ansRes].price,
    videoCardOptions[ansVC].price,
    processorOptions[ansProcessor].price,
    hddOptions[ansHDD].price,
    ]
    let totalPrice = 0
    for (let i in prices) {
    totalPrice = totalPrice + prices[parseInt(i)]
    }
console.log('You Have Chosen the following options: ')
console.log(resOptions[ansRes])
console.log(videoCardOptions[ansVC])
console.log(processorOptions[ansProcessor])
console.log(hddOptions[ansHDD])
console.log(totalPrice)


    