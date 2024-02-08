import { useState } from "react";
import "./App.css";
import { AttributeDataProperties } from "./types/myTypes";
import UiField from "./components/UiField";

const App = () => {
  const [attributeData, setAttributeData] = useState<AttributeDataProperties[]>([])
  const data = [
      {
        order: 18,
        typeId: "MULTI_SELECT",
        elementId: "ff8081818d7823ad018d783b54f90004",
        displayName: "multiSelectList",
        defaultValue: null,
        attributeName: "multiSelectList",
        required: true,
        editable: true,
        dataModelUrl: null,
        rules: '{"rules":[]}',
        width: 100,
        validValues: [
          {
            id: "ff8081818d7823ad018d783b54f90006",
            value: "dsfsdf",
            displayName: "dsfsdf",
            displayOrder: 0,
          },
          {
            id: "ff8081818d7823ad018d783b54f90005",
            value: "lkjkljk",
            displayName: "lkjkljk",
            displayOrder: 1,
          },
        ],
        userValues: null,
        metadataTypeForTemplate: "",
        placeholder: null,
      },
      {
        order: 19,
        typeId: "MULTI_SELECT",
        elementId: "ff8081818d7823ad018d783d1bf9000b",
        displayName: "multiSelectList1",
        defaultValue: null,
        attributeName: "multiSelectList1",
        required: true,
        editable: true,
        dataModelUrl: null,
        rules: '{"rules":[]}',
        width: 100,
        validValues: [
          {
            id: "ff8081818d7823ad018d783d1bf9000c",
            value: "cxvxcvcx",
            displayName: "cxvxcvcx",
            displayOrder: 0,
          },
          {
            id: "ff8081818d7823ad018d783d1bf9000d",
            value: "jkghjghj",
            displayName: "jkghjghj",
            displayOrder: 1,
          },
        ],
        userValues: null,
        metadataTypeForTemplate: "",
        placeholder: null,
      },
  ];

  const getValue = (id: string) => {
    return Object(attributeData)[id]?.value?.[0] || null;
  }


  const handleInput = (id: string, displayName: string, value: string | Date | number) => {
    setAttributeData(prevState => ({
      ...prevState,
      [id]: { value: [value]}
    }));
  }
  console.log("value ", attributeData)

  return (
    <>
      {
        data.map((d) => 
          <>
            <UiField getValue={getValue} uiFieldMetaData={d} handleInput={handleInput} />
          </>
        )
      }
    </>
  );
}

export default App;

