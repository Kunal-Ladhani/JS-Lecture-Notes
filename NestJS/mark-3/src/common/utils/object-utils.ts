interface IObjectUtils {
    isObject: <T>(value: T) => boolean;
    merge: (target: Record<string, any>, source: Record<string, any>) => Record<string, any>;
  }
  
  export const ObjectUtils: IObjectUtils = {
    /**
     * Check for object type variable
     * @param value
     * @returns boolean
     */
    isObject<T>(value: T): boolean {
      return value !== null && typeof value === 'object' && !Array.isArray(value);
    },
  
    /**
     * Copy values from source object to target object
     * @param target
     * @param source
     * @returns object
     */
    merge(target: Record<string, any>, source: Record<any, any>): Record<string, any> {
      Object.keys(target).forEach((key: string) => {
        if (this.isObject(target[key]) && this.isObject(source[key])) {
          Object.assign(source[key], this.merge(target[key], source[key]));
        }
      });
      return { ...target, ...source };
    },
  };
  