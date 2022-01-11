/*
     Title: Zone Owner Info with Mock
     Description: Zone Owner Info with Mock
     Author: Iqbal Hossain
     Date: 09-January-2022
     Modified: 09-January-2022
*/

import { paginateArray } from '@fake-db/utils';
import { ZONE_API } from 'services/api-end-points/production/v1';
import { randomIdGenerator } from 'utility/Utils';
import mock from '../../mock';

const data = [
  {
    id: 1,
    zoneOwnerName: 'S.M. Moin',
    employeeCode: 'E-101',
    phoneNumber: '0125465785',
    status: 'active'
  },
  {
    id: 2,
    zoneOwnerName: 'Md. Amzad Hossain',
    employeeCode: 'E-102',
    phoneNumber: '0125465785',
    status: 'inactive'
  },
  {
    id: 3,
    zoneOwnerName: 'Md. Rasel',
    employeeCode: 'E-103',
    phoneNumber: '0125465785',
    status: 'active'
  }
];

//GET ALL DATA
mock.onGet(`${ZONE_API.fetch_all}`).reply(200, data);

//GET: get single
mock.onGet(`${ZONE_API.fetch_by_id}`).reply(config => {
  const { id } = config;
  const res = data.find(e => e.id === id);
  return [200, { succeeded: true, data: res }];
});

//GET: get by query
mock.onGet(`${ZONE_API.fetch_by_query}`).reply(config => {
  const { q = '', rowsPerPage = 10, page = 1, status = null } = config;
  const queryLowered = q.toLowerCase();
  const filteredData = data.filter(
    item =>
      item.zoneOwnerName.toLowerCase().includes(queryLowered) ||
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
mock.onPost(`${ZONE_API.add}`).reply(config => {
  const res = JSON.parse(config.data);
  res.id = randomIdGenerator();
  data.unshift(res);
  return [201, { message: 'Data Added Successfully!!', succeeded: true, data: res }];
});

//POST: update
mock.onPost(`${ZONE_API.update}`).reply(config => {
  const updateItem = JSON.parse(config.data).data;
  updateItem.id = Number(updateItem.id);
  const res = data.find(e => e.id === Number(updateItem.id));
  Object.assign(res, updateItem);
  return [200, { message: 'Data Updated Successfully!!', succeeded: true, data: res }];
});

//DELETE: delete
mock.onDelete(`${ZONE_API.delete}`).reply(config => {
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
mock.onDelete(`${ZONE_API.delete_by_range}`).reply(config => {
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
