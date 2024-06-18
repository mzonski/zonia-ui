import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';
import { ValuesType } from 'utility-types';

import SimpleTable, { SimpleTableProps } from './SimpleTable';
import { SimpleTableRequiredProps } from './types';

const meta = {
  title: '2. Components/Data display/Table/Simple',
  component: SimpleTable<FakeOrder>,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof SimpleTable<FakeOrder>>;

export default meta;

type Story = StoryObj<typeof meta>;

const paymentStatuses = {
  Pending: 'pending',
  Completed: 'completed',
  Failed: 'failed',
} as const;

const paymentMethod = {
  Paypal: 0,
  CreditCard: 1,
  BankTransfer: 2,
} as const;

type PaymentStatus = ValuesType<typeof paymentStatuses>;
type PaymentMethod = ValuesType<typeof paymentMethod>;

function getPaymentMethodTypeMessage(method: PaymentMethod) {
  switch (method) {
    case paymentMethod.Paypal: {
      return 'PayPal';
    }
    case paymentMethod.CreditCard: {
      return 'Credit card';
    }
    case paymentMethod.BankTransfer: {
      return 'Bank transfer';
    }
    default:
      throw new Error(`Message not defined for payment method ${paymentMethod[method]}`);
  }
}

interface FakeOrder extends SimpleTableRequiredProps {
  id: number;
  orderId: string;
  status: PaymentStatus;
  amount: string;
  billingDate: string;
  method: PaymentMethod;
}

function fakeOrderGenerator(length: number) {
  let currentId = 0;
  function generateFakeOrder(): FakeOrder {
    const status = faker.helpers.arrayElement(Object.values(paymentStatuses));
    const method = faker.helpers.arrayElement(Object.values(paymentMethod));

    const nextId = currentId;
    currentId += 1;

    return {
      id: nextId,
      orderId: `Order #${nextId}`,
      status,
      amount: faker.finance.amount({ min: 10, max: 1000, dec: 0 }),
      billingDate: faker.date.future().toLocaleDateString('en-GB'),
      method,
    };
  }

  const generateFakeOrders = () => {
    currentId = 1;
    return Array.from({ length }, generateFakeOrder);
  };

  return generateFakeOrders();
}

const fakeOrdersList = fakeOrderGenerator(20);

const fakeOrdersTableProps = {
  headers: {
    1: { type: 'text', content: 'Order', width: '35%', colTextAlign: 'left', dataProp: 'orderId' },
    2: {
      type: 'text',
      content: 'Billing date',
      dataProp: 'billingDate',
      width: '20%',
    },
    3: {
      type: 'text',
      content: 'Amount',
      dataProp: 'amount',
      width: '20%',
      renderCellContent: (idx) => {
        const { amount } = fakeOrdersList[idx];
        return `$${amount}`;
      },
    },
    4: {
      type: 'text',
      content: 'Via',
      dataProp: 'method',
      width: '20%',
      colTextAlign: 'right',
      renderCellContent: (idx) => getPaymentMethodTypeMessage(fakeOrdersList[idx].method),
    },
  },
  data: fakeOrdersList,
} satisfies Omit<SimpleTableProps<FakeOrder>, '$layoutType'>;

export const Clean: Story = {
  args: {
    ...fakeOrdersTableProps,
    $layoutType: 'fluid',
    clean: true,
  },
};
export const Fixed: Story = {
  args: {
    ...fakeOrdersTableProps,
    $layoutType: 'fixed',
    $width: '400px',
  },
};
export const Fluid: Story = {
  args: {
    ...fakeOrdersTableProps,
    $layoutType: 'fluid',
    $minWidth: '800px',
    $maxWidth: '1000px',
  },
};
