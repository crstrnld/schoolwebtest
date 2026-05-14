export function createElement(tag, className, attributes = {}, innerHTML = '') {
    const el = document.createElement(tag);
    if (className) el.className = className;
    Object.keys(attributes).forEach(attr => el.setAttribute(attr, attributes[attr]));
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
}

export function clearContainer(container) {
    while (container.firstChild) container.removeChild(container.firstChild);
}