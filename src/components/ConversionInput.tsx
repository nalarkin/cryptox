import React from 'react'




interface ConversionProps {
    initial: string;
}



export default function ConversionInput({initial}: ConversionProps) {
    const bitCoinValue = 51891.10;
    const [cryptoValue, updateCryptoValue] = React.useState<string>(initial);
    const initialCurrency = (parseFloat(initial) * bitCoinValue).toString();
    const [currencyValue, updateCurrencyValue] = React.useState<string>(initialCurrency);
    // const [childA, updateChildA] = React.useState<string>('BTC');
    // const [childB, updateChildB] = React.useState<string>('USD');
    const childA = 'BTC';
    const childB = 'USD';

    function cryptoToCurrency(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = e.target.value;
        if (/^\d+\.?\d*|\.?\d+$/.test(newValue)) {
            updateCryptoValue(newValue);
            const floatValue = parseFloat(newValue);
            const newString = (floatValue * bitCoinValue).toString();
            updateCurrencyValue(newString);
        } else if (newValue.length === 0 || newValue === '.') {
            // give user error
            updateCryptoValue(newValue);
            updateCurrencyValue(newValue);
        }
        
       
    }
    function currencyToCrypto(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = e.target.value;
        // update ui of user typed input
        updateCurrencyValue(newValue);
        // update other box based on calc
       
        if (/^\d+\.?\d*|\.?\d+$/.test(newValue)) {
            const floatValue = parseFloat(newValue);
            const newString = (floatValue / bitCoinValue).toString();
            updateCryptoValue(newString);
            //
        } else {
            // give user error
        }
        
    }

    return (
        <div id='converter-input' className=' grid grid-cols-2  '>
            <div className='currency-header currency-grid-1-1 font-semibold'><h2>{childA}</h2></div>
            <div className='currency-header currency-grid-1-2 font-semibold'><h2>{childB}</h2></div>
            <input 
                className='currency-grid-2-1 text-black text-center mr-5 ml-5 text-xl h-12 mt-5 p-2 rounded-lg'
                name={childA}
                type="text" 
                value={cryptoValue} 
                onChange={cryptoToCurrency} 
            />        
            
            <input 
                className='currency-grid-2-2 text-black text-center mr-5 ml-5 text-xl mt-5 p-2 rounded-lg'
                name={childB}
                type="text" 
                value={currencyValue} 
                onChange={currencyToCrypto} 
            />        
        </div>
        
    );
}


// import React from 'react';
// import { Formik, Field, Form, useField, useFormikContext } from 'formik';
// // import { StringMappingType } from 'typescript';

// interface FieldProps {
//     name: string,
// }

// interface ContextProps {
//     textA: string,
//     textB: string,
//     touched: {},
//     setFieldValue: () => void,
// }


// const MyField = (props: FieldProps) => {
//   const {
//     values: { textA, textB },
//     touched,
//     setFieldValue,
//   } = useFormikContext<ContextProps>();
//   const [field, meta] = useField(props);

//   React.useEffect(() => {
//     // set the value of textC, based on textA and textB
//     if (
//       textA.trim() !== '' &&
//       textB.trim() !== '' 
//     //   (touched.textA || touched.textB)
//     ) {
//       setFieldValue(props.name, `textA: ${textA}, textB: ${textB}`);
//     }
//     // only run if any of the below changes
//   }, [textB, textA, touched.textA, touched.textB, setFieldValue, props.name]);

//   return (
//     <>
//       <input {...props} {...field} />
//       {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
//     </>
//   );
// };

// function ConversionInput() {
//   // Note that we provide initalValues all 3 fields.
//   const initialValues = { textA: 'a', textB: 'yepb', textC: '' };
//   return (
//     <div className="App">
//       <Formik
//         initialValues={initialValues}
//         onSubmit={async (values) => alert(JSON.stringify(values, null, 2))}
//       >
//         <div className="section">
//           <h1>Dependent Formik Field Example</h1>
//           <p style={{ color: '#555' }}>
//             This is an example of how to set the value of one field based on the
//             current values of other fields in Formik v2. In form below, textC's
//             value is set based on the current values of fields textA and textB.
//           </p>
//           <div>
//             <small>
//               <em>
//                 Instructions: enter values for textA, and textB, and then watch
//                 textC.
//               </em>
//             </small>
//           </div>
//           <Form>
//             <label>
//               textA
//               <Field name="textA" />
//             </label>
//             <label>
//               textB
//               <Field name="textB" />
//             </label>
//             <label>
//               textC
//               <MyField name="textC" />
//             </label>
//             {/* <button type="submit">Submit</button> */}
//           </Form>
//         </div>
//       </Formik>
//       <div style={{ marginTop: 16 }}>
//         Notice the following:
//         <ul>
//           <li>
//             textC's value is set after fields textA and textB have been touched
//             and if they are not empty.
//           </li>
//           <li>
//             textC is <i>still</i> editable after being set programmatically.
//             However, the value will be overwritten if/whenever there are (new)
//             changes to textA and textB. This is because of the dependency array
//             in our custom field's React.useEffect; it only runs when textA or
//             textB change or have been touched. Since Formik's `setFieldValue` is
//             equivalent between renders and so is the field's name prop, this
//             works as expected. You could alter this overrwriting behavior by
//             keeping track of whether textC was been updated by field.onChange or
//             useEffect. This might be very useful if you want to alert the end
//             user that their changes to textC will be lost.
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// // const rootElement = document.getElementById('root');
// // ReactDOM.render(<App />, rootElement);

// export default ConversionInput;