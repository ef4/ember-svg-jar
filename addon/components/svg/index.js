import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Svg extends Component {
  @tracked ready = false;

	constructor() {
		super(...arguments);
		this.loadSvg(this.args.name);
	}

	async loadSvg(name) {
    await import(`${location.origin}/ember-svg-jar/components/svg/${this.args.name}.js`);
    this.ready = true;
  }

  get fullComponentName() {
    return `ember-svg-jar@svg/${this.args.name}`;
  }
}
