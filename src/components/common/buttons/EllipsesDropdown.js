import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  font-size: 2rem;
  margin-top: 1.5rem;
  background-color: inherit;
`;

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Button
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <i className='fas fa-ellipsis-h'></i>
  </Button>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className='mx-3 my-2 w-auto'
          placeholder='Type to filter...'
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className='list-unstyled'>
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

export { CustomToggle, CustomMenu };

// render(
//   <Dropdown>
//     <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
//       Custom toggle
//     </Dropdown.Toggle>

//     <Dropdown.Menu as={CustomMenu}>
//       <Dropdown.Item eventKey="1">Red</Dropdown.Item>
//       <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
//       <Dropdown.Item eventKey="3" active>
//         Orange
//       </Dropdown.Item>
//       <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
//     </Dropdown.Menu>
//   </Dropdown>,
// );