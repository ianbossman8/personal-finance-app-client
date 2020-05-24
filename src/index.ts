import './style.css'

function component() {
  const element = document.createElement('div')

  element.innerHTML = "Hi there !"

  return element
}

document.body.appendChild(component())