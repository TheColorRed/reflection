namespace Reflection {
  export class Type {
    public constructor(protected obj: Object) {

    }

    public getProperty(name: string) {
      return this.getProperties().find(p => p.name == name)
    }

    public getProperties() {
      let props: PropertyInfo[] = []
      for (let name of this.getAllPropertyNames(this.obj.constructor.prototype)) {
        props.push(new PropertyInfo(name))
      }
      return props
    }


    private * getAllPropertyNames(obj: any): any {
      yield* Object.getOwnPropertyNames(obj)

      let proto = Object.getPrototypeOf(obj)

      if (proto !== null) {
        yield* this.getAllPropertyNames(proto)
      }
    }
  }
}