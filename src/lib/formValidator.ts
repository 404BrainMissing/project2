const formValidator = (values: { name: string; age: number }) => {
    let errors:{[key: string ]: null | undefined | string | number } = {};

    if(values.name.length == 0) {
        errors.name = "Invalid Name";
    }

    if(values.age > 18) {
        errors.age = "Invalid Age";
    }
    
    return errors;
    
}