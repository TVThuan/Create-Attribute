var config = {
'paths': {
    'fabric': 'Magedelight_Productlabel/js/fabric'
},    
map: {
    '*': {            
        'Magento_Ui/js/form/element/single-checkbox':'AHT_CreateAtt/js/form/element/single-checkbox'
    }
},
'shim': {
    'fabric': {
        exports: 'fabric',
        'deps': ['jquery']
    }
}
};