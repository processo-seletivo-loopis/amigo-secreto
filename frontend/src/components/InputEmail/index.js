import React from 'react'
import StyledInputEmail from './styles'

export default function InputEmail() {
    return (
        <StyledInputEmail>
            <label for="email" class="lbl-email style-lbl">Email</label>
            <input type="email" name="email" id="email" required />
        </StyledInputEmail>
    )
}
