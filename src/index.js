
import React, { PropTypes } from 'react'
import TinyMCE from 'react-tinymce'

const TinyMCEInput = ({
  id,
  disabled,
  label,
  name,
  input: {
    value,
    onChange
  },
  config
}) => (
  <TinyMCE
    id={id}
    content={value}
    config={{
      skin: false,
      theme: 'modern',
      ...config
    }}
    onChange={e => {
      onChange(e.target.getContent())
    }}
  />
)

TinyMCEInput.propTypes = {
  addField: PropTypes.bool.isRequired,
  addLabel: PropTypes.bool.isRequired,
  input: PropTypes.object,
  label: PropTypes.string,
  options: PropTypes.object,
  source: PropTypes.string,
  config: PropTypes.object
}

TinyMCEInput.defaultProps = {
  addField: true,
  addLabel: true,
  options: {},
  record: {}
}

export default TinyMCEInput
