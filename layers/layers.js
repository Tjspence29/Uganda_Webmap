var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_FinalUganda_1 = new ol.format.GeoJSON();
var features_FinalUganda_1 = format_FinalUganda_1.readFeatures(json_FinalUganda_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FinalUganda_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FinalUganda_1.addFeatures(features_FinalUganda_1);
var lyr_FinalUganda_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FinalUganda_1, 
                style: style_FinalUganda_1,
                interactive: true,
    title: 'FinalUganda<br />\
    <img src="styles/legend/FinalUganda_1_0.png" /> 1<br />\
    <img src="styles/legend/FinalUganda_1_1.png" /> 2<br />\
    <img src="styles/legend/FinalUganda_1_2.png" /> 3<br />\
    <img src="styles/legend/FinalUganda_1_3.png" /> 4<br />\
    <img src="styles/legend/FinalUganda_1_4.png" /> 5<br />\
    <img src="styles/legend/FinalUganda_1_5.png" /> 6<br />\
    <img src="styles/legend/FinalUganda_1_6.png" /> 7<br />\
    <img src="styles/legend/FinalUganda_1_7.png" /> 8<br />\
    <img src="styles/legend/FinalUganda_1_8.png" /> 9<br />\
    <img src="styles/legend/FinalUganda_1_9.png" /> 10<br />\
    <img src="styles/legend/FinalUganda_1_10.png" /> 11<br />\
    <img src="styles/legend/FinalUganda_1_11.png" /> 12<br />\
    <img src="styles/legend/FinalUganda_1_12.png" /> 13<br />\
    <img src="styles/legend/FinalUganda_1_13.png" /> 14<br />\
    <img src="styles/legend/FinalUganda_1_14.png" /> 15<br />\
    <img src="styles/legend/FinalUganda_1_15.png" /> 16<br />\
    <img src="styles/legend/FinalUganda_1_16.png" /> 17<br />\
    <img src="styles/legend/FinalUganda_1_17.png" /> 18<br />\
    <img src="styles/legend/FinalUganda_1_18.png" /> 19<br />\
    <img src="styles/legend/FinalUganda_1_19.png" /> 20<br />\
    <img src="styles/legend/FinalUganda_1_20.png" /> 21<br />\
    <img src="styles/legend/FinalUganda_1_21.png" /> 22<br />\
    <img src="styles/legend/FinalUganda_1_22.png" /> 23<br />\
    <img src="styles/legend/FinalUganda_1_23.png" /> 24<br />\
    <img src="styles/legend/FinalUganda_1_24.png" /> 25<br />\
    <img src="styles/legend/FinalUganda_1_25.png" /> 26<br />\
    <img src="styles/legend/FinalUganda_1_26.png" /> 27<br />\
    <img src="styles/legend/FinalUganda_1_27.png" /> 28<br />\
    <img src="styles/legend/FinalUganda_1_28.png" /> 29<br />\
    <img src="styles/legend/FinalUganda_1_29.png" /> 30<br />\
    <img src="styles/legend/FinalUganda_1_30.png" /> 31<br />\
    <img src="styles/legend/FinalUganda_1_31.png" /> 32<br />\
    <img src="styles/legend/FinalUganda_1_32.png" /> 33<br />\
    <img src="styles/legend/FinalUganda_1_33.png" /> 34<br />\
    <img src="styles/legend/FinalUganda_1_34.png" /> 35<br />\
    <img src="styles/legend/FinalUganda_1_35.png" /> 36<br />\
    <img src="styles/legend/FinalUganda_1_36.png" /> 37<br />\
    <img src="styles/legend/FinalUganda_1_37.png" /> 38<br />\
    <img src="styles/legend/FinalUganda_1_38.png" /> 39<br />\
    <img src="styles/legend/FinalUganda_1_39.png" /> 40<br />\
    <img src="styles/legend/FinalUganda_1_40.png" /> 41<br />\
    <img src="styles/legend/FinalUganda_1_41.png" /> 42<br />\
    <img src="styles/legend/FinalUganda_1_42.png" /> 43<br />\
    <img src="styles/legend/FinalUganda_1_43.png" /> 44<br />\
    <img src="styles/legend/FinalUganda_1_44.png" /> 45<br />\
    <img src="styles/legend/FinalUganda_1_45.png" /> 46<br />\
    <img src="styles/legend/FinalUganda_1_46.png" /> 47<br />\
    <img src="styles/legend/FinalUganda_1_47.png" /> 48<br />\
    <img src="styles/legend/FinalUganda_1_48.png" /> 49<br />\
    <img src="styles/legend/FinalUganda_1_49.png" /> 50<br />\
    <img src="styles/legend/FinalUganda_1_50.png" /> 51<br />\
    <img src="styles/legend/FinalUganda_1_51.png" /> 52<br />\
    <img src="styles/legend/FinalUganda_1_52.png" /> 53<br />\
    <img src="styles/legend/FinalUganda_1_53.png" /> 54<br />\
    <img src="styles/legend/FinalUganda_1_54.png" /> 55<br />\
    <img src="styles/legend/FinalUganda_1_55.png" /> 56<br />\
    <img src="styles/legend/FinalUganda_1_56.png" /> 57<br />\
    <img src="styles/legend/FinalUganda_1_57.png" /> 58<br />\
    <img src="styles/legend/FinalUganda_1_58.png" /> 59<br />\
    <img src="styles/legend/FinalUganda_1_59.png" /> 60<br />\
    <img src="styles/legend/FinalUganda_1_60.png" /> 61<br />\
    <img src="styles/legend/FinalUganda_1_61.png" /> 62<br />\
    <img src="styles/legend/FinalUganda_1_62.png" /> 63<br />\
    <img src="styles/legend/FinalUganda_1_63.png" /> 64<br />\
    <img src="styles/legend/FinalUganda_1_64.png" /> 65<br />\
    <img src="styles/legend/FinalUganda_1_65.png" /> 66<br />\
    <img src="styles/legend/FinalUganda_1_66.png" /> 67<br />\
    <img src="styles/legend/FinalUganda_1_67.png" /> 68<br />\
    <img src="styles/legend/FinalUganda_1_68.png" /> 69<br />\
    <img src="styles/legend/FinalUganda_1_69.png" /> 70<br />\
    <img src="styles/legend/FinalUganda_1_70.png" /> 71<br />\
    <img src="styles/legend/FinalUganda_1_71.png" /> 72<br />\
    <img src="styles/legend/FinalUganda_1_72.png" /> 73<br />\
    <img src="styles/legend/FinalUganda_1_73.png" /> 74<br />\
    <img src="styles/legend/FinalUganda_1_74.png" /> 75<br />\
    <img src="styles/legend/FinalUganda_1_75.png" /> 76<br />\
    <img src="styles/legend/FinalUganda_1_76.png" /> 77<br />\
    <img src="styles/legend/FinalUganda_1_77.png" /> 78<br />\
    <img src="styles/legend/FinalUganda_1_78.png" /> 79<br />\
    <img src="styles/legend/FinalUganda_1_79.png" /> 80<br />\
    <img src="styles/legend/FinalUganda_1_80.png" /> 81<br />\
    <img src="styles/legend/FinalUganda_1_81.png" /> 82<br />\
    <img src="styles/legend/FinalUganda_1_82.png" /> 83<br />\
    <img src="styles/legend/FinalUganda_1_83.png" /> 84<br />\
    <img src="styles/legend/FinalUganda_1_84.png" /> 85<br />\
    <img src="styles/legend/FinalUganda_1_85.png" /> 86<br />\
    <img src="styles/legend/FinalUganda_1_86.png" /> 87<br />\
    <img src="styles/legend/FinalUganda_1_87.png" /> 88<br />\
    <img src="styles/legend/FinalUganda_1_88.png" /> 89<br />\
    <img src="styles/legend/FinalUganda_1_89.png" /> 90<br />\
    <img src="styles/legend/FinalUganda_1_90.png" /> 91<br />\
    <img src="styles/legend/FinalUganda_1_91.png" /> 92<br />\
    <img src="styles/legend/FinalUganda_1_92.png" /> 93<br />\
    <img src="styles/legend/FinalUganda_1_93.png" /> 94<br />\
    <img src="styles/legend/FinalUganda_1_94.png" /> 95<br />\
    <img src="styles/legend/FinalUganda_1_95.png" /> 96<br />\
    <img src="styles/legend/FinalUganda_1_96.png" /> 97<br />\
    <img src="styles/legend/FinalUganda_1_97.png" /> 98<br />\
    <img src="styles/legend/FinalUganda_1_98.png" /> 99<br />\
    <img src="styles/legend/FinalUganda_1_99.png" /> 100<br />\
    <img src="styles/legend/FinalUganda_1_100.png" /> 101<br />\
    <img src="styles/legend/FinalUganda_1_101.png" /> 102<br />\
    <img src="styles/legend/FinalUganda_1_102.png" /> 103<br />\
    <img src="styles/legend/FinalUganda_1_103.png" /> 104<br />\
    <img src="styles/legend/FinalUganda_1_104.png" /> 105<br />\
    <img src="styles/legend/FinalUganda_1_105.png" /> 106<br />\
    <img src="styles/legend/FinalUganda_1_106.png" /> 107<br />\
    <img src="styles/legend/FinalUganda_1_107.png" /> 108<br />\
    <img src="styles/legend/FinalUganda_1_108.png" /> 109<br />\
    <img src="styles/legend/FinalUganda_1_109.png" /> 110<br />\
    <img src="styles/legend/FinalUganda_1_110.png" /> 111<br />\
    <img src="styles/legend/FinalUganda_1_111.png" /> 112<br />\
    <img src="styles/legend/FinalUganda_1_112.png" /> 113<br />\
    <img src="styles/legend/FinalUganda_1_113.png" /> 114<br />\
    <img src="styles/legend/FinalUganda_1_114.png" /> 115<br />\
    <img src="styles/legend/FinalUganda_1_115.png" /> 116<br />\
    <img src="styles/legend/FinalUganda_1_116.png" /> 117<br />\
    <img src="styles/legend/FinalUganda_1_117.png" /> 118<br />\
    <img src="styles/legend/FinalUganda_1_118.png" /> 119<br />\
    <img src="styles/legend/FinalUganda_1_119.png" /> 120<br />\
    <img src="styles/legend/FinalUganda_1_120.png" /> 121<br />\
    <img src="styles/legend/FinalUganda_1_121.png" /> 122<br />\
    <img src="styles/legend/FinalUganda_1_122.png" /> 123<br />\
    <img src="styles/legend/FinalUganda_1_123.png" /> 124<br />\
    <img src="styles/legend/FinalUganda_1_124.png" /> 125<br />\
    <img src="styles/legend/FinalUganda_1_125.png" /> 126<br />\
    <img src="styles/legend/FinalUganda_1_126.png" /> 127<br />\
    <img src="styles/legend/FinalUganda_1_127.png" /> 128<br />\
    <img src="styles/legend/FinalUganda_1_128.png" /> 129<br />\
    <img src="styles/legend/FinalUganda_1_129.png" /> 130<br />\
    <img src="styles/legend/FinalUganda_1_130.png" /> 131<br />\
    <img src="styles/legend/FinalUganda_1_131.png" /> 132<br />\
    <img src="styles/legend/FinalUganda_1_132.png" /> 133<br />\
    <img src="styles/legend/FinalUganda_1_133.png" /> 134<br />\
    <img src="styles/legend/FinalUganda_1_134.png" /> 135<br />\
    <img src="styles/legend/FinalUganda_1_135.png" /> 136<br />\
    <img src="styles/legend/FinalUganda_1_136.png" /> 137<br />\
    <img src="styles/legend/FinalUganda_1_137.png" /> 138<br />\
    <img src="styles/legend/FinalUganda_1_138.png" /> 139<br />\
    <img src="styles/legend/FinalUganda_1_139.png" /> 140<br />\
    <img src="styles/legend/FinalUganda_1_140.png" /> 141<br />\
    <img src="styles/legend/FinalUganda_1_141.png" /> 142<br />\
    <img src="styles/legend/FinalUganda_1_142.png" /> 143<br />\
    <img src="styles/legend/FinalUganda_1_143.png" /> 144<br />\
    <img src="styles/legend/FinalUganda_1_144.png" /> 145<br />\
    <img src="styles/legend/FinalUganda_1_145.png" /> 146<br />\
    <img src="styles/legend/FinalUganda_1_146.png" /> 147<br />\
    <img src="styles/legend/FinalUganda_1_147.png" /> 148<br />\
    <img src="styles/legend/FinalUganda_1_148.png" /> 149<br />\
    <img src="styles/legend/FinalUganda_1_149.png" /> 150<br />\
    <img src="styles/legend/FinalUganda_1_150.png" /> 151<br />\
    <img src="styles/legend/FinalUganda_1_151.png" /> 152<br />\
    <img src="styles/legend/FinalUganda_1_152.png" /> 153<br />\
    <img src="styles/legend/FinalUganda_1_153.png" /> 154<br />\
    <img src="styles/legend/FinalUganda_1_154.png" /> 155<br />\
    <img src="styles/legend/FinalUganda_1_155.png" /> 156<br />\
    <img src="styles/legend/FinalUganda_1_156.png" /> 157<br />\
    <img src="styles/legend/FinalUganda_1_157.png" /> 158<br />\
    <img src="styles/legend/FinalUganda_1_158.png" /> 159<br />\
    <img src="styles/legend/FinalUganda_1_159.png" /> 160<br />\
    <img src="styles/legend/FinalUganda_1_160.png" /> 161<br />\
    <img src="styles/legend/FinalUganda_1_161.png" /> 162<br />\
    <img src="styles/legend/FinalUganda_1_162.png" /> 163<br />\
    <img src="styles/legend/FinalUganda_1_163.png" /> 164<br />\
    <img src="styles/legend/FinalUganda_1_164.png" /> 165<br />\
    <img src="styles/legend/FinalUganda_1_165.png" /> 166<br />\
    <img src="styles/legend/FinalUganda_1_166.png" /> 167<br />\
    <img src="styles/legend/FinalUganda_1_167.png" /> 168<br />\
    <img src="styles/legend/FinalUganda_1_168.png" /> 169<br />\
    <img src="styles/legend/FinalUganda_1_169.png" /> 170<br />\
    <img src="styles/legend/FinalUganda_1_170.png" /> 171<br />\
    <img src="styles/legend/FinalUganda_1_171.png" /> 172<br />\
    <img src="styles/legend/FinalUganda_1_172.png" /> 173<br />\
    <img src="styles/legend/FinalUganda_1_173.png" /> 174<br />\
    <img src="styles/legend/FinalUganda_1_174.png" /> 175<br />\
    <img src="styles/legend/FinalUganda_1_175.png" /> 176<br />\
    <img src="styles/legend/FinalUganda_1_176.png" /> 177<br />\
    <img src="styles/legend/FinalUganda_1_177.png" /> 178<br />\
    <img src="styles/legend/FinalUganda_1_178.png" /> 179<br />\
    <img src="styles/legend/FinalUganda_1_179.png" /> 180<br />\
    <img src="styles/legend/FinalUganda_1_180.png" /> 181<br />\
    <img src="styles/legend/FinalUganda_1_181.png" /> 182<br />\
    <img src="styles/legend/FinalUganda_1_182.png" /> 183<br />\
    <img src="styles/legend/FinalUganda_1_183.png" /> 184<br />\
    <img src="styles/legend/FinalUganda_1_184.png" /> 185<br />\
    <img src="styles/legend/FinalUganda_1_185.png" /> 186<br />\
    <img src="styles/legend/FinalUganda_1_186.png" /> 187<br />\
    <img src="styles/legend/FinalUganda_1_187.png" /> 188<br />\
    <img src="styles/legend/FinalUganda_1_188.png" /> 189<br />\
    <img src="styles/legend/FinalUganda_1_189.png" /> 190<br />\
    <img src="styles/legend/FinalUganda_1_190.png" /> 191<br />\
    <img src="styles/legend/FinalUganda_1_191.png" /> 192<br />\
    <img src="styles/legend/FinalUganda_1_192.png" /> 193<br />\
    <img src="styles/legend/FinalUganda_1_193.png" /> 194<br />\
    <img src="styles/legend/FinalUganda_1_194.png" /> 195<br />\
    <img src="styles/legend/FinalUganda_1_195.png" /> 196<br />\
    <img src="styles/legend/FinalUganda_1_196.png" /> 197<br />\
    <img src="styles/legend/FinalUganda_1_197.png" /> 198<br />\
    <img src="styles/legend/FinalUganda_1_198.png" /> 199<br />\
    <img src="styles/legend/FinalUganda_1_199.png" /> 200<br />\
    <img src="styles/legend/FinalUganda_1_200.png" /> 201<br />\
    <img src="styles/legend/FinalUganda_1_201.png" /> 202<br />\
    <img src="styles/legend/FinalUganda_1_202.png" /> 203<br />\
    <img src="styles/legend/FinalUganda_1_203.png" /> 204<br />\
    <img src="styles/legend/FinalUganda_1_204.png" /> 205<br />\
    <img src="styles/legend/FinalUganda_1_205.png" /> 206<br />\
    <img src="styles/legend/FinalUganda_1_206.png" /> 207<br />\
    <img src="styles/legend/FinalUganda_1_207.png" /> 208<br />\
    <img src="styles/legend/FinalUganda_1_208.png" /> 209<br />\
    <img src="styles/legend/FinalUganda_1_209.png" /> 210<br />\
    <img src="styles/legend/FinalUganda_1_210.png" /> 211<br />\
    <img src="styles/legend/FinalUganda_1_211.png" /> 212<br />\
    <img src="styles/legend/FinalUganda_1_212.png" /> 213<br />\
    <img src="styles/legend/FinalUganda_1_213.png" /> 214<br />\
    <img src="styles/legend/FinalUganda_1_214.png" /> 215<br />\
    <img src="styles/legend/FinalUganda_1_215.png" /> 216<br />\
    <img src="styles/legend/FinalUganda_1_216.png" /> 217<br />\
    <img src="styles/legend/FinalUganda_1_217.png" /> 218<br />\
    <img src="styles/legend/FinalUganda_1_218.png" /> 219<br />\
    <img src="styles/legend/FinalUganda_1_219.png" /> 220<br />\
    <img src="styles/legend/FinalUganda_1_220.png" /> 221<br />\
    <img src="styles/legend/FinalUganda_1_221.png" /> 222<br />\
    <img src="styles/legend/FinalUganda_1_222.png" /> 223<br />\
    <img src="styles/legend/FinalUganda_1_223.png" /> 224<br />\
    <img src="styles/legend/FinalUganda_1_224.png" /> 225<br />\
    <img src="styles/legend/FinalUganda_1_225.png" /> 226<br />\
    <img src="styles/legend/FinalUganda_1_226.png" /> 227<br />\
    <img src="styles/legend/FinalUganda_1_227.png" /> 228<br />\
    <img src="styles/legend/FinalUganda_1_228.png" /> 229<br />\
    <img src="styles/legend/FinalUganda_1_229.png" /> 230<br />\
    <img src="styles/legend/FinalUganda_1_230.png" /> 231<br />\
    <img src="styles/legend/FinalUganda_1_231.png" /> 232<br />\
    <img src="styles/legend/FinalUganda_1_232.png" /> 233<br />\
    <img src="styles/legend/FinalUganda_1_233.png" /> 234<br />\
    <img src="styles/legend/FinalUganda_1_234.png" /> 235<br />\
    <img src="styles/legend/FinalUganda_1_235.png" /> 236<br />\
    <img src="styles/legend/FinalUganda_1_236.png" /> 237<br />\
    <img src="styles/legend/FinalUganda_1_237.png" /> 238<br />\
    <img src="styles/legend/FinalUganda_1_238.png" /> 239<br />\
    <img src="styles/legend/FinalUganda_1_239.png" /> 240<br />\
    <img src="styles/legend/FinalUganda_1_240.png" /> 241<br />\
    <img src="styles/legend/FinalUganda_1_241.png" /> 242<br />\
    <img src="styles/legend/FinalUganda_1_242.png" /> 243<br />\
    <img src="styles/legend/FinalUganda_1_243.png" /> 244<br />\
    <img src="styles/legend/FinalUganda_1_244.png" /> 245<br />\
    <img src="styles/legend/FinalUganda_1_245.png" /> 246<br />\
    <img src="styles/legend/FinalUganda_1_246.png" /> 247<br />\
    <img src="styles/legend/FinalUganda_1_247.png" /> 248<br />\
    <img src="styles/legend/FinalUganda_1_248.png" /> 249<br />\
    <img src="styles/legend/FinalUganda_1_249.png" /> 250<br />\
    <img src="styles/legend/FinalUganda_1_250.png" /> 251<br />\
    <img src="styles/legend/FinalUganda_1_251.png" /> 252<br />\
    <img src="styles/legend/FinalUganda_1_252.png" /> 253<br />\
    <img src="styles/legend/FinalUganda_1_253.png" /> 254<br />\
    <img src="styles/legend/FinalUganda_1_254.png" /> 255<br />\
    <img src="styles/legend/FinalUganda_1_255.png" /> 256<br />\
    <img src="styles/legend/FinalUganda_1_256.png" /> 257<br />\
    <img src="styles/legend/FinalUganda_1_257.png" /> 258<br />\
    <img src="styles/legend/FinalUganda_1_258.png" /> 259<br />\
    <img src="styles/legend/FinalUganda_1_259.png" /> 260<br />\
    <img src="styles/legend/FinalUganda_1_260.png" /> 261<br />\
    <img src="styles/legend/FinalUganda_1_261.png" /> 262<br />\
    <img src="styles/legend/FinalUganda_1_262.png" /> 263<br />\
    <img src="styles/legend/FinalUganda_1_263.png" /> 264<br />\
    <img src="styles/legend/FinalUganda_1_264.png" /> 265<br />\
    <img src="styles/legend/FinalUganda_1_265.png" /> 266<br />\
    <img src="styles/legend/FinalUganda_1_266.png" /> 267<br />\
    <img src="styles/legend/FinalUganda_1_267.png" /> 268<br />\
    <img src="styles/legend/FinalUganda_1_268.png" /> 269<br />\
    <img src="styles/legend/FinalUganda_1_269.png" /> 270<br />\
    <img src="styles/legend/FinalUganda_1_270.png" /> 271<br />\
    <img src="styles/legend/FinalUganda_1_271.png" /> 272<br />\
    <img src="styles/legend/FinalUganda_1_272.png" /> 273<br />\
    <img src="styles/legend/FinalUganda_1_273.png" /> 274<br />\
    <img src="styles/legend/FinalUganda_1_274.png" /> 275<br />\
    <img src="styles/legend/FinalUganda_1_275.png" /> 276<br />\
    <img src="styles/legend/FinalUganda_1_276.png" /> 277<br />\
    <img src="styles/legend/FinalUganda_1_277.png" /> 278<br />\
    <img src="styles/legend/FinalUganda_1_278.png" /> 279<br />\
    <img src="styles/legend/FinalUganda_1_279.png" /> 280<br />\
    <img src="styles/legend/FinalUganda_1_280.png" /> 281<br />\
    <img src="styles/legend/FinalUganda_1_281.png" /> 282<br />\
    <img src="styles/legend/FinalUganda_1_282.png" /> 283<br />\
    <img src="styles/legend/FinalUganda_1_283.png" /> 284<br />\
    <img src="styles/legend/FinalUganda_1_284.png" /> 285<br />\
    <img src="styles/legend/FinalUganda_1_285.png" /> 286<br />\
    <img src="styles/legend/FinalUganda_1_286.png" /> 287<br />\
    <img src="styles/legend/FinalUganda_1_287.png" /> 288<br />\
    <img src="styles/legend/FinalUganda_1_288.png" /> 289<br />\
    <img src="styles/legend/FinalUganda_1_289.png" /> 290<br />\
    <img src="styles/legend/FinalUganda_1_290.png" /> 291<br />\
    <img src="styles/legend/FinalUganda_1_291.png" /> 292<br />\
    <img src="styles/legend/FinalUganda_1_292.png" /> 293<br />\
    <img src="styles/legend/FinalUganda_1_293.png" /> 294<br />\
    <img src="styles/legend/FinalUganda_1_294.png" /> 295<br />\
    <img src="styles/legend/FinalUganda_1_295.png" /> 296<br />\
    <img src="styles/legend/FinalUganda_1_296.png" /> 297<br />\
    <img src="styles/legend/FinalUganda_1_297.png" /> 298<br />\
    <img src="styles/legend/FinalUganda_1_298.png" /> 299<br />\
    <img src="styles/legend/FinalUganda_1_299.png" /> 300<br />\
    <img src="styles/legend/FinalUganda_1_300.png" /> 301<br />\
    <img src="styles/legend/FinalUganda_1_301.png" /> 302<br />\
    <img src="styles/legend/FinalUganda_1_302.png" /> 303<br />\
    <img src="styles/legend/FinalUganda_1_303.png" /> 304<br />\
    <img src="styles/legend/FinalUganda_1_304.png" /> 305<br />\
    <img src="styles/legend/FinalUganda_1_305.png" /> 306<br />\
    <img src="styles/legend/FinalUganda_1_306.png" /> 307<br />\
    <img src="styles/legend/FinalUganda_1_307.png" /> 308<br />\
    <img src="styles/legend/FinalUganda_1_308.png" /> 309<br />\
    <img src="styles/legend/FinalUganda_1_309.png" /> 310<br />\
    <img src="styles/legend/FinalUganda_1_310.png" /> 311<br />\
    <img src="styles/legend/FinalUganda_1_311.png" /> 312<br />\
    <img src="styles/legend/FinalUganda_1_312.png" /> 313<br />\
    <img src="styles/legend/FinalUganda_1_313.png" /> 314<br />\
    <img src="styles/legend/FinalUganda_1_314.png" /> 315<br />\
    <img src="styles/legend/FinalUganda_1_315.png" /> 316<br />\
    <img src="styles/legend/FinalUganda_1_316.png" /> 317<br />\
    <img src="styles/legend/FinalUganda_1_317.png" /> 318<br />\
    <img src="styles/legend/FinalUganda_1_318.png" /> 319<br />\
    <img src="styles/legend/FinalUganda_1_319.png" /> 320<br />\
    <img src="styles/legend/FinalUganda_1_320.png" /> 321<br />\
    <img src="styles/legend/FinalUganda_1_321.png" /> 322<br />\
    <img src="styles/legend/FinalUganda_1_322.png" /> 323<br />\
    <img src="styles/legend/FinalUganda_1_323.png" /> 324<br />\
    <img src="styles/legend/FinalUganda_1_324.png" /> 325<br />\
    <img src="styles/legend/FinalUganda_1_325.png" /> 326<br />\
    <img src="styles/legend/FinalUganda_1_326.png" /> 327<br />\
    <img src="styles/legend/FinalUganda_1_327.png" /> 328<br />\
    <img src="styles/legend/FinalUganda_1_328.png" /> 329<br />\
    <img src="styles/legend/FinalUganda_1_329.png" /> 330<br />\
    <img src="styles/legend/FinalUganda_1_330.png" /> 331<br />\
    <img src="styles/legend/FinalUganda_1_331.png" /> 332<br />\
    <img src="styles/legend/FinalUganda_1_332.png" /> 333<br />\
    <img src="styles/legend/FinalUganda_1_333.png" /> 334<br />\
    <img src="styles/legend/FinalUganda_1_334.png" /> 335<br />\
    <img src="styles/legend/FinalUganda_1_335.png" /> 336<br />\
    <img src="styles/legend/FinalUganda_1_336.png" /> 337<br />\
    <img src="styles/legend/FinalUganda_1_337.png" /> 338<br />\
    <img src="styles/legend/FinalUganda_1_338.png" /> 339<br />\
    <img src="styles/legend/FinalUganda_1_339.png" /> 340<br />\
    <img src="styles/legend/FinalUganda_1_340.png" /> 341<br />\
    <img src="styles/legend/FinalUganda_1_341.png" /> 342<br />\
    <img src="styles/legend/FinalUganda_1_342.png" /> 343<br />\
    <img src="styles/legend/FinalUganda_1_343.png" /> <br />'
        });
var format_Districts_2 = new ol.format.GeoJSON();
var features_Districts_2 = format_Districts_2.readFeatures(json_Districts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Districts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districts_2.addFeatures(features_Districts_2);
var lyr_Districts_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Districts_2, 
                style: style_Districts_2,
                interactive: true,
                title: '<img src="styles/legend/Districts_2.png" /> Districts'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_FinalUganda_1.setVisible(true);lyr_Districts_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_FinalUganda_1,lyr_Districts_2];
lyr_FinalUganda_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'CLUSTER_ID': 'CLUSTER_ID', 'CLUSTER_SI': 'CLUSTER_SI', 'SumClstPop': 'Population', 'x': 'Longitude', 'y': 'Latitude', 'NAME_1': 'District', 'NAME_2': 'County', 'NAME_3': 'Sub-County', });
lyr_Districts_2.set('fieldAliases', {'ID_0': 'ID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', });
lyr_FinalUganda_1.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', 'CLUSTER_ID': 'Hidden', 'CLUSTER_SI': 'Hidden', 'SumClstPop': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', });
lyr_Districts_2.set('fieldImages', {'ID_0': 'Hidden', 'COUNTRY': 'Hidden', 'NAME_1': 'Hidden', 'NAME_2': 'Hidden', 'ID_3': 'Hidden', 'NAME_3': 'Hidden', 'VARNAME_3': 'Hidden', 'TYPE_3': 'Hidden', 'ENGTYPE_3': 'Hidden', });
lyr_FinalUganda_1.set('fieldLabels', {'SumClstPop': 'header label', 'x': 'header label', 'y': 'header label', 'NAME_1': 'header label', 'NAME_2': 'header label', 'NAME_3': 'header label', });
lyr_Districts_2.set('fieldLabels', {});
lyr_Districts_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});