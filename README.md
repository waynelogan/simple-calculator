# Simple Calculator
This is a calculator implemented in React JS

### Stack
React JS
Next JS

### Execution
1. clone git repo
2. navigate to root folder
3. in the cli, run `npm run dev`

### Design features
- State was stored in the topmost component. State trickled down to its child components and events were bubbled up to the parent component to implement one way data flow. This is because the `App` component was the first parent with elements that relied on a single state.
- User Input was stored in three stateful values, `firstInput`, `operand` and `lastInput` selected by some fancy programming sorcery (I'm kidding. I did null checks and set them to null after every operation)

### Screenshots
<a href="https://drive.google.com/uc?export=view&id=1v470giykOit_g8x5oCmn6G5XCnxl_deO">
<img src="https://drive.google.com/uc?export=view&id=1v470giykOit_g8x5oCmn6G5XCnxl_deO" style="width: 650px; max-width: 100%; height: auto" title="Click to enlarge picture" />
</a>
