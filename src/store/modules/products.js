import Vue from 'vue'
import * as types from '../mutation-types'
import * as apis from '../../api'

const state = {
  products: []
}

const mutations = {
  [types.GET_PRODUCTS] (state, { products }) {
    state.products = state.products.concat(products)
  }
}

const actions = {
  getProducts({commit}, params) {
    apis.getProducts(params)
      .then(res => {
        commit(types.GET_PRODUCTS, {
          
	
	"products": [
		{
			"creationDate": "2016-11-03T15:30:11+00:00",
			"expirationDate": "2017-12-31T15:30:09+00:00",
			"offering": {
				"alias": "workload-automation",
				"description": "Optimize and automate complex workloads for greater IT efficiency",
				"name": "IBM Workload Automation"
			},
			"subscriptionStatus": "ACTIVE"
		},
		{
			"creationDate": "2017-01-19T00:12:04+00:00",
			"expirationDate": "2017-04-19T00:12:02+00:00",
			"offering": {
				"description": "IBM SPSS Statistics (trial)",
				"name": "IBM SPSS Statistics Subscription"
			},
			"subscriptionStatus": "ACTIVE"
		},
		{
			"creationDate": "2016-10-04T00:39:17+00:00",
			"expirationDate": "2066-10-04T00:39:15+00:00",
			"offering": {
				"alias": "watson-analytics",
				"description": "Watson Analytics IBM Internal Test",
				"name": "Watson Analytics IBM Internal Test"
			},
			"subscriptionStatus": "DELETING"
		},
		{
			"creationDate": "2017-03-01T15:54:22+00:00",
			"expirationDate": "2067-03-01T15:54:21+00:00",
			"offering": {
				"alias": "supervised-machine-learning",
				"description": "Watson Knowledge Studio Free",
				"name": "Watson Knowledge Studio Free"
			},
			"subscriptionStatus": "ACTIVE"
		},
		{
			"creationDate": "2016-10-18T14:17:50+00:00",
			"expirationDate": "2016-11-17T14:17:49+00:00",
			"offering": {
				"alias": "application-performance-management",
				"description": "Optimize application and infrastructure performance",
				"name": "IBM Performance Management on Cloud Trial"
			},
			"subscriptionStatus": "DELETING"
		},
		{
			"creationDate": "2016-11-02T01:51:52+00:00",
			"expirationDate": "2066-11-02T01:51:50+00:00",
			"offering": {
				"alias": "application-security-on-cloud",
				"description": "Find and fix vulnerable code before launch with on-cloud testing",
				"name": "IBM Application Security Analyzer Free Part"
			},
			"subscriptionStatus": "ACTIVE"
		},
		{
			"creationDate": "2017-03-01T16:54:42+00:00",
			"expirationDate": "2067-03-01T16:54:40+00:00",
			"offering": {
				"alias": "workflow-automation",
				"description": "Simplify your workflow by quickly connecting cloud and local apps",
				"name": "IBM App Connect Free"
			},
			"subscriptionStatus": "ACTIVE"
		},
		{
			"creationDate": "2016-02-22T21:49:20+00:00",
			"expirationDate": "2017-03-22T21:49:17+00:00",
			"offering": {
				"alias": "decision-optimization-cloud",
				"description": "Make real-world decisions with speed and dependability",
				"name": "IBM Decision Optimization on Cloud - Pay As You Go - 6 core \/ 28 GB"
			},
			"subscriptionStatus": "ACTIVE"
		},
		{
			"creationDate": "2015-11-14T01:13:04+00:00",
			"expirationDate": "2017-04-01T04:00:00+00:00",
			"offering": {
				"alias": "IBM Cloud Orchestrator Content Pack for Docker Integration",
				"description": "The content pack contains script packages to install Docker, to run a Docker container and to build a Docker image using a Docker-file.",
				"name": "IBM Cloud Orchestrator Content Pack for Docker Integration"
			},
			"subscriptionStatus": "ACTIVE"
		},
		{
			"creationDate": "2015-11-14T01:17:32+00:00",
			"expirationDate": "2017-04-01T04:00:00+00:00",
			"offering": {
				"description": "The IBM SmartCloud Orchestrator Contrail SDN content pack enables SCO users to leverage the Juniper Contrail solution using REST APIs for software defined network deployments by way of self service business processes.",
				"name": "IBM SmartCloud Orchestrator Content Pack for Juniper Contrail"
			},
			"subscriptionStatus": "ACTIVE"
		},
		{
			"creationDate": "2016-10-28T14:20:03+00:00",
			"expirationDate": "2017-04-01T04:00:00+00:00",
			"offering": {
				"description": "IQP pairs with Bluemix for end-to-end IoT solution. Create code free Enterprise Apps for monitoring, controlling devices, user reports, video camera.",
				"name": "IQP IoT Code-Free App Development"
			},
			"subscriptionStatus": "ACTIVE"
		},
		{
			"creationDate": "2016-12-30T20:14:18+00:00",
			"expirationDate": "2017-04-01T04:00:00+00:00",
			"offering": {
				"description": "Testdroid Cloud is a testing platform as a service running real Android and iOS devices. Tests can be run manually or using common automation frameworks.",
				"name": "Testdroid Cloud"
			},
			"subscriptionStatus": "ACTIVE"
		},
		{
			"creationDate": "2017-03-01T20:02:32+00:00",
			"expirationDate": "2017-04-01T04:00:00+00:00",
			"offering": {
				"description": "SendGrid's cloud-based email infrastructure relieves businesses of the cost and complexity of maintaining email systems.",
				"name": "SendGrid"
			},
			"subscriptionStatus": "ACTIVE"
		},
		{
			"creationDate": "2017-03-01T21:25:01+00:00",
			"offering": {
				"name": "IBM License Metric Tool"
			},
			"subscriptionStatus": "IN_PROGRESS"
		}]
      })
    })
  }
}

const getters = {
  products: state => state.products,
}

export default {
  state,
  getters,
  mutations,
  actions
}
