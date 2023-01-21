export default class RandomField {
  constructor(container, element) {
    this.container = container;
    this.listFields = this.container.querySelectorAll('.item_field');
    this.element = element;
  }

  deletingImage() {
    const picture = this.container.querySelector('.img');
    if (picture) picture.remove();
  }

  addImage() {
    const random = Math.floor(Math.random() * this.listFields.length);
    const field = this.listFields[random];
    // field.appendChild(this.element);
    field.append(this.element);
  }
}
