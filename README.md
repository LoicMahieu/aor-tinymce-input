# `<TinyMCEInput>` for admin-on-rest

<TinyMCEInput> component for admin-on-rest, useful for editing HTML in admin GUIs.

Binding of [`<TinyMCE />`](https://github.com/instructure-react/react-tinymce) for [admin-on-rest](https://github.com/marmelab/admin-on-rest).

## Installation

```sh
npm install aor-tinymce-input --save
```

## Usage

```js
import React from 'react'
import {
  Edit,
  TextInput
} from 'admin-on-rest/mui'

import tinymce from 'tinymce/tinymce'

import 'tinymce/themes/modern/theme'
import 'tinymce/skins/lightgray/skin.min.css'

import TinyMCEInput from 'aor-tinymce-input'

// react-tinymce use global ref
window.tinymce = tinymce

export const PostEdit = (props) => (
  <Edit>
    <TextInput source="title" />
    <TinyMCEInput source="content" config={{ skin: false }} />
  </Edit>
)
```

## License

This library is licensed under the [MIT Licence](LICENSE), and sponsored by [iGLOO](https://igloo.be).
