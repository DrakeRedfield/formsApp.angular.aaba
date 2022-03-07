import { IFormField } from "src/app/shared/utils/interfaces/forms.interfaces";

export const formFieldGroup: IFormField[] = [
    {
        text: 'Products',
        type: 'text',
        placeHolder: 'Product Name',
        name: 'product',
        isRequired: true,
        minLength: 3,
        errorMessage:'Must to have at least 3 letters',
    },
    {
        text: 'Price',
        type: 'number',
        placeHolder: 'Product Price',
        name: 'price',
        isRequired: true,
        errorMessage:'Insert a valid price'
    },
    {
        text: 'Stock',
        type: 'number',
        placeHolder: 'How many are there...',
        name: 'stock'
    }
]

export const DynamicFormFieldGroup: IFormField[] = [
    {
        text: 'Name',
        type: 'text',
        placeHolder: 'Product Name',
        name: 'fullName',
        isRequired: true,
        minLength: 0,
        errorMessage:'',
        hasButton: false
    },
    {
        text: 'Favorite Videogames',
        type: 'text',
        placeHolder: 'Video Game :0',
        name: 'favoriteVideoGame',
        isRequired: true,
        minLength: 0,
        errorMessage:'',
        hasButton: true,
        buttonText: 'Add' 
    },
]
