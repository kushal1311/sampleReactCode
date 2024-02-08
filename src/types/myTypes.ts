export enum AttributeOperationEnum {
    NO_CHANGE = 'NO_CHANGE',
    ADD = 'ADD',
    REPLACE = 'REPLACE',
    DELETE = 'DELETE'
}

export interface KeyDTO {
    uuid: string;
    id?: string;
    operation?: AttributeOperationEnum;
    index?: number;
}  

export interface PageTemplateField extends KeyDTO{
    beanType: string;
    name: string;
    required: boolean;
    editable: boolean;
    rules: null | any;
    displayOrder: number;
    fieldId: string;
    xrefId: null | any;
    languageMap: null | any;
    custom: boolean;
    width: number;
    displayName: string;
    staticDefaultValue: string;
    metadataTypeId: string;
    validValues: any[];
}

export interface FormField {
    order: number;
    typeId: string;
    elementId: string;
    displayName: string;
    defaultValue: any; 
    attributeName: string;
    required: boolean;
    editable: boolean;
    dataModelUrl: string | null;
    rules: string;
    width: number;
    validValues: {
        id: string;
        value: string;
        displayName: string;
        displayOrder: number;
    }[];
    userValues: any[] | null;
    metadataTypeForTemplate: string;
    placeholder: string | null;
}

export interface AttributeDataProperties {
    [key: string | number]: {
        value: string[];
    };
}