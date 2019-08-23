import Route from "@ember/routing/route";
import classic from "ember-classic-decorator";

@classic
export default class appRoute extends Route {
  model() {
    return {
      name: "Gokul"
    };
  }
}
