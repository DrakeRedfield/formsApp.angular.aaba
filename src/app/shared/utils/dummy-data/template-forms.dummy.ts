import { Validators } from "@angular/forms";
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
        errorMessage:'Insert a valid price',
        minValue: 0
    },
    {
        text: 'Stock',
        type: 'number',
        placeHolder: 'How many are there...',
        name: 'stock',
        minValue: 0
    }
]

export const DynamicFormFieldGroup: IFormField[] = [
    {
        text: 'Name',
        type: 'text',
        placeHolder: 'Full Name',
        name: 'fullName',
        isRequired: true,
        minLength: 2,
        errorMessage:'Insert a valid name',
        hasButton: false
    },
    {
        text: 'Favorite Videogames',
        type: 'text',
        placeHolder: 'Video Game :0',
        name: 'favoriteVideoGame',
        isRequired: true,
        minLength: 2,
        errorMessage:'Insert a valid videogame',
        hasButton: true,
        buttonText: 'Add',
        formListConfiguration: [
            {
                defaultValue: 'Uncharted',
                validators: [Validators.required],
                asyncValidators: []
            },
            {
                defaultValue: 'Fortnite',
                validators: [Validators.required],
                asyncValidators: []
            },
            {
                defaultValue: 'Halo',
                validators: [Validators.required],
                asyncValidators: []
            }
        ]
    },
]
