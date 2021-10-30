import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        redLarge: 0,
        redMed: 0,
        redSmall: 0,
        blueLarge: 0,
        blueMed: 0,
        blueSmall: 0,
        greenLarge: 0,
        greenMed: 0,
        greenSmall: 0,
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += Number.parseInt(action.payload.quant);
            switch (action.payload.color) {
                case 'red':
                    switch (action.payload.size) {
                        case 'large':
                            state.redLarge += Number.parseInt(action.payload.quant);
                            break;
                        case 'medium':
                            state.redMed += Number.parseInt(action.payload.quant);
                            break;
                        case 'small':
                            state.redSmall += Number.parseInt(action.payload.quant);
                            break;

                        default:
                            break;
                    }
                    break;
                case 'blue':
                    switch (action.payload.size) {
                        case 'large':
                            state.blueLarge += Number.parseInt(action.payload.quant);
                            break;
                        case 'medium':
                            state.blueMed += Number.parseInt(action.payload.quant);
                            break;
                        case 'small':
                            state.blueSmall += Number.parseInt(action.payload.quant);
                            break;

                        default:
                            break;
                    }
                    break;
                case 'green':
                    switch (action.payload.size) {
                        case 'large':
                            state.greenLarge += Number.parseInt(action.payload.quant);
                            break;
                        case 'medium':
                            state.greenMed += Number.parseInt(action.payload.quant);
                            break;
                        case 'small':
                            state.greenSmall += Number.parseInt(action.payload.quant);
                            break;

                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        },
        decrementByAmount: (state, action) => {
            state.value--;
            switch (action.payload.color) {
                case 'Red':
                    switch (action.payload.size) {
                        case 'Large':
                            state.redLarge--;
                            break;
                        case 'Medium':
                            state.redMed--;
                            break;
                        case 'Small':
                            state.redSmall--;
                            break;

                        default:
                            break;
                    }
                    break;
                case 'Blue':
                    switch (action.payload.size) {
                        case 'Large':
                            state.blueLarge--;
                            break;
                        case 'Medium':
                            state.blueMed--;
                            break;
                        case 'Small':
                            state.blueSmall--;
                            break;

                        default:
                            break;
                    }
                    break;
                case 'Green':
                    switch (action.payload.size) {
                        case 'Large':
                            state.greenLarge--;
                            break;
                        case 'Medium':
                            state.greenMed--;
                            break;
                        case 'Small':
                            state.greenSmall--;
                            break;

                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        }
    }
})
export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions

export default counterSlice.reducer