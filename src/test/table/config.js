let cb = new ConfigBox('Style Configuration', true)
cb.start()
cb.createText('Reset:')
let cs = new ConfigSwitch(cb.body)
cs.value = {
  'native-style-reset.css': true,
  'destyle.css': false,
  'acab.css': false,
  'tocas.css': false
}
cs.create(choosen => {
  console.log(choosen)
})
let cc = new ConfigChoose(cb.body)
cc.value = { 'X': false, 'Y': true, 'Z': true }
cc.create((item, active) => {
  console.log(item + ':' + active)
  console.log(cc.chooses)
})
cb.setPosition({
  left: 'auto',
  top: '0',
  right: '0',
  bottom: 'auto'
})