import{R as e,T as m,C as d,X as E,H as f,a as p,b as c,B as y,c as r,d as t,r as h,e as s,D as g,f as b}from"./vendor.8355912a.js";const v=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function u(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerpolicy&&(n.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?n.credentials="include":l.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(l){if(l.ep)return;l.ep=!0;const n=u(l);fetch(l.href,n)}};v();const w=()=>e.createElement("div",{style:{overflowX:"auto"}},e.createElement(m,{style:{minWidth:500}},e.createElement(d,null,e.createElement(E,null,"Garden details")),e.createElement(f,null,e.createElement(p,null,e.createElement(c,null,"Fruit"),e.createElement(c,null,"Sun exposure"),e.createElement(c,null,"Soil"))),e.createElement(y,null,e.createElement(r,null,e.createElement(t,null,"Raspberries"),e.createElement(t,null,"Partial shade"),e.createElement(t,null,"Moist and slightly acidic")),e.createElement(r,null,e.createElement(t,null,"Strawberries"),e.createElement(t,null,"Full sun"),e.createElement(t,null,"Medium moisture")),e.createElement(r,null,e.createElement(t,null,"Grapes"),e.createElement(t,null,"Full sun"),e.createElement(t,null,"Rich and well draining")),e.createElement(r,null,e.createElement(t,null,"Cherries"),e.createElement(t,null,"Partial sun"),e.createElement(t,null,"Rich and well draining")),e.createElement(r,null,e.createElement(t,null,"Tomatoes"),e.createElement(t,null,"Partial shade"),e.createElement(t,null,"Well draining")))));const x=document.getElementById("root");h.exports.render(s.exports.createElement("div",{style:{padding:g.space.md}},s.exports.createElement(b,null,s.exports.createElement(w,null))),x);
