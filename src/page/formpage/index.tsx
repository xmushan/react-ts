import Form from './components/Form'
import FormItem from './components/FormItem'
import Input from './components/Input'
import CustomRef from './components/CustomRef'
import React from 'react'

function FormPage() {
    const FormRef = React.useRef<Form>(null)

    return (
        <div>
            <Form ref={FormRef}>
                <FormItem name='name'>
                    <Input />
                </FormItem>
                <FormItem name='age'>
                    <Input />
                </FormItem>
            </Form>
            <button onClick={() => {
                FormRef.current?.submit((value: any) => {
                    console.log(value)
                })
            }} >submit</button>
            <button onClick={() => {
                FormRef.current?.reset()
            }} >submit</button>
            <CustomRef/>
        </div>
    )
}

export default FormPage