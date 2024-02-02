function customRender(reactElement, container){

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)


    // More optimised version of above code
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

}


const reactElement = {
    type : 'a',
    props : {
        href : 'https://github.com/Pranavbarthwal',
        target : '_blank'
    },
    children : 'Pranav Barthwal on GitHub'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)