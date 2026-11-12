import type { Access, CollectionConfig, FieldAccess } from 'payload'

const isPayloadAdmin: Access = ({ req }) => req.user?.collection === 'admins'
const isPayloadAdminField: FieldAccess = ({ req }) => req.user?.collection === 'admins'

export const InterestSubmissions: CollectionConfig = {
  slug: 'interest-submissions',
  access: {
    create: () => true,
    delete: isPayloadAdmin,
    read: isPayloadAdmin,
    update: isPayloadAdmin,
  },
  admin: {
    group: 'Sales',
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'company', 'monthlyVolume', 'status'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      maxLength: 100,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      index: true,
    },
    {
      name: 'company',
      type: 'text',
      maxLength: 120,
    },
    {
      name: 'monthlyVolume',
      type: 'number',
      required: true,
      min: 200001,
      validate: (value: number | null | undefined) =>
        (typeof value === 'number' && Number.isInteger(value) && value > 200000) ||
        'Monthly volume must be a whole number greater than 200,000.',
    },
    {
      name: 'message',
      type: 'textarea',
      maxLength: 1200,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      required: true,
      access: {
        create: isPayloadAdminField,
        read: isPayloadAdminField,
        update: isPayloadAdminField,
      },
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Qualified', value: 'qualified' },
        { label: 'Closed', value: 'closed' },
      ],
    },
  ],
  timestamps: true,
  versions: false,
}
