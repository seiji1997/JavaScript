
# 問題 4

## 都道府県オブジェクトの配列を作成する関数

### 説明
`都道府県.txt` に、都道府県・県庁所在地・人口の3つの配列が記載されています。これらを統合して、都道府県オブジェクトの配列を返す関数を記述してください。以下が関数の詳細です。

- 引数に3つの配列を受け取ります
- 都道府県、県庁所在地、人口の3つのプロパティを持つオブジェクトを生成します
- 生成したオブジェクトの配列を返します

### ソリューションアプローチ
1. 3つの配列（都道府県、県庁所在地、人口）を引数として受け取る関数 `createPrefectureArray` を作成します。
2. 配列の長さに基づいてループを作成し、各要素をオブジェクトにまとめます。
3. 生成したオブジェクトを配列に追加し、最終的にその配列を返します。

### コード
```javascript
const createPrefectureArray = (prefectures, cities, populations) => {
  const result = [];
  for (let i = 0; i < prefectures.length; i++) {
    result.push({
      prefecture: prefectures[i],
      city: cities[i],
      population: populations[i]
    });
  }
  return result;
};

// サンプルデータ
const prefectures = ["茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県"];
const cities = ["水戸市", "宇都宮市", "前橋市", "さいたま市", "千葉市", "新宿区", "横浜市"];
const populations = [2916976, 1974255, 1973115, 7337330, 6222666, 13942856, 9200166];

console.log(createPrefectureArray(prefectures, cities, populations));
```

### コードの詳細な解説
1. 関数 `createPrefectureArray` を定義し、3つの引数 `prefectures`、`cities`、`populations` を受け取ります。
2. 空の配列 `result` を作成します。
3. `for` ループを使用して各配列の長さに基づいてループを実行し、各インデックスに対応するオブジェクトを生成して `result` 配列に追加します。
4. 最後に `result` 配列を返します。
5. サンプルデータを使用して関数を呼び出し、結果をコンソールに出力します。

### 入出力例
- 入力: 配列 `prefectures`, `cities`, `populations`
- 出力:
  ```javascript
  [
    { prefecture: '茨城県', city: '水戸市', population: 2916976 },
    { prefecture: '栃木県', city: '宇都宮市', population: 1974255 },
    { prefecture: '群馬県', city: '前橋市', population: 1973115 },
    { prefecture: '埼玉県', city: 'さいたま市', population: 7337330 },
    { prefecture: '千葉県', city: '千葉市', population: 6222666 },
    { prefecture: '東京都', city: '新宿区', population: 13942856 },
    { prefecture: '神奈川県', city: '横浜市', population: 9200166 }
  ]
  ```
