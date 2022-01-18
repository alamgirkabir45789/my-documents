/*
     Title: Cut Plan Mockup
     Description: Cut Plan Mockup
     Author: Iqbal Hossain
     Date: 18-January-2022
     Modified: 18-January-2022
*/

import { paginateArray } from '@fake-db/utils';
import { CUT_PLAN_API } from 'services/api-end-points/production/v1';
import { randomIdGenerator } from 'utility/Utils';
import mock from '../../mock';

const data = [
  {
    id: 1,
    cutPlanNo: 'CP001',
    startDate: '18-Jan-2022',
    buyer: 'Kuper',
    style: 'AV56567',
    styleCategory: 'T-Shirt',
    totalLay: '400',
    totalQuantity: '2400',
    status: 'active'
  },
  {
    id: 2,
    cutPlanNo: 'CP002',
    startDate: '18-Jan-2022',
    buyer: 'IFG',
    style: 'AV1873',
    styleCategory: 'Shorts',
    totalLay: '600',
    totalQuantity: '6000',
    status: 'active'
  },
  {
    id: 3,
    cutPlanNo: 'CP003',
    startDate: '18-Jan-2022',
    buyer: 'RICHLU',
    style: 'M7825',
    styleCategory: 'Jeans',
    totalLay: '500',
    totalQuantity: '5000',
    status: 'inactive'
  }
];

//GET ALL DATA
mock.onGet(`${CUT_PLAN_API.fetch_all}`).reply(200, data);

//GET: get single
mock.onGet(`${CUT_PLAN_API.fetch_by_id}`).reply(config => {
  const { id } = config;
  const res = data.find(e => e.id === id);
  return [200, { data: res, succeeded: true }];
});

//GET: get by query
mock.onGet(`${CUT_PLAN_API.fetch_by_query}`).reply(config => {
  const { q = '', rowsPerPage = 10, page = 1, status = null } = config;
  const queryLowered = q.toLowerCase();
  const filteredData = data.filter(
    item =>
      item.cutPlanNo.toLowerCase().includes(queryLowered) ||
      item.status === (status === '' ? item.status : status)
  );
  return [
    200,
    {
      data: paginateArray(data, rowsPerPage, page),
      totalRecords: filteredData.length,
      succeeded: true
    }
  ];
});

//POST: Add new
mock.onPost(`${CUT_PLAN_API.add}`).reply(config => {
  const res = JSON.parse(config.data);
  res.id = randomIdGenerator();
  data.unshift(res);
  return [201, { message: 'Data Added Successfully!!', succeeded: true, data: res }];
});

//POST: update
mock.onPost(`${CUT_PLAN_API.update}`).reply(config => {
  const updateItem = JSON.parse(config.data).data;
  updateItem.id = Number(updateItem.id);
  const res = data.find(e => e.id === Number(updateItem.id));
  Object.assign(res, updateItem);
  return [200, { message: 'Data Updated Successfully!!', succeeded: true, data: res }];
});

//DELETE: delete
mock.onDelete(`${CUT_PLAN_API.delete}`).reply(config => {
  let getId = Number(config.id);
  const itemIndex = data.findIndex(item => item.id === getId);
  data.splice(itemIndex, 1);
  return [
    200,
    {
      message: 'Data Deleted Successfully!!!',
      succeeded: true,
      data: data
    }
  ];
});

// DELETE: Deletes  Range
mock.onDelete(`${CUT_PLAN_API.delete_by_range}`).reply(config => {
  // Get id from URL
  const modifieddata = [...data];
  const ids = config.ids;
  for (let index = 0; index < ids.length; index++) {
    const id = ids[index];
    const itemIndex = modifieddata.findIndex(item => item.id === id);
    modifieddata.splice(itemIndex, 1);
  }
  return [
    200,
    {
      message: 'Data Deleted successfully!!!',
      succeeded: true,
      data: modifieddata
    }
  ];
});
