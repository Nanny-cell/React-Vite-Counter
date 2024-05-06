import {fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp"

describe('Pruebas en CounterApp', () => { 

    const value = 0;

    test('Debe de hacer match con el snapshot', () => { 

        const {container } = render(<CounterApp value = { value } />)
        expect(container).toMatchSnapshot();
    })

    test('Debe mostrar el valor inicial de 100', () => { 
        
        render(<CounterApp value = { 100 } /> );
        expect(screen.getByText(100)).toBeTruthy();

    })

    test('Debe de incrementar con el boton +1', () => { 
        
        render(<CounterApp value = { value } />)
        //fireEvent.click( screen.getByText('+1') )
        fireEvent.click(screen.getByRole('button', {name: 'btn-positivo'} ))
        expect(screen.getByText('1')).toBeTruthy(); 
    })

    test('Debe de decrementar con el boton -1', () => { 
        
        render(<CounterApp value = { value } />)
        //fireEvent.click( screen.getByText('-1') )
        fireEvent.click(screen.getByRole('button', {name: 'btn-negativo'} ))
        expect(screen.getAllByText('-1')).toBeTruthy(); 
    })

    test('Debe de funcionar el boton de reset', () => { 
        
        render(<CounterApp value = { 355 } />);
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('Reset') );

        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))

        expect( screen.getByText(355) ).toBeTruthy();
     })
})
