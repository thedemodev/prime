import { registerField } from '@primecms/field';
import { InputComponent } from './InputComponent';
import { SchemaSettingsComponent } from './SchemaSettingsComponent';

export default registerField('string', {
  InputComponent,
  SchemaSettingsComponent,
});
