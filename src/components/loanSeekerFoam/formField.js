import React, { memo, useCallback } from 'react'

export const Field = memo((props) => {
  const onFieldChange = useCallback(
    (event) => {
      props.onFieldChange(props.fieldName, event.target.value)
    },
    [props.onFieldChange, props.fieldName]
  )


  return (
    <fieldset>
      <label htmlFor={props.fieldName}>{props.labelText}</label>

      <input
        type={props.fieldType}
        name={props.fieldName}
        id={props.fieldName}
        onChange={onFieldChange}
        value={props.fieldValue}
      />

      {props.hasError && (
        <p>{`Please fill in correct value for "${props.labelText}".`}</p>
      )}
    </fieldset>
  )
})