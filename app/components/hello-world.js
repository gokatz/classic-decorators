import Component from "@ember/component";
import classic from "ember-classic-decorator";

@classic
export default class HelloWorld extends Component {
  tagName = "";
  name = "Tomster";
}
