class HashTable {

  constructor() {
    this.table = new Array(137);
    this.values = [];
  }

  hash(string) {
    const H = 37;
    let total = 0;
    for (var i = 0; i < string.length; ++i) {
      total += H * total + string.charCodeAt(i);
    }
    total %= this.table.length;

    if (total < 1) {
      this.table.length - 1;
    }

    return paarseInt(total);

  }


  showDistro() {
    for (const key in this.table) {
      if (this.table[key] !== undefined) {
        console.log(key, ' : ', this.table[key]);
      }
    }
  }

  put(data) {
    const pos = this.hash(data);
    this.table[pos] = data;
  }


  get(key) {
    return this.table[this.hash(key)];
  }
}

// 构建链技术的哈希表 解决hash 冲突
class HashTableChains extends HashTable {

  constructor() {
    super();
    this.buildChains();
  }
  buildChains() {
    for (var i = 0; i < this.table.length; i++) {

      this.table[i] = new Array();
    }
  }

  showDistro() {
    for (const key in this.table) {
      if (this.table[key][0] !== undefined) {
        console.log(key, ' : ', this.table[key]);
      }
    }
  }
  put(key, data) {
    const pos = this.hash(key);
    let index = 0;
    if (this.table[pos][index] === undefined) {
      this.table[pos][index] = data;
    } else {
      ++index;
      while (this.table[pos][index] != undefined) {
        ++index;
      }
      this.table[pos][index] = data;
    }
  }

  get(key) {
    const pos = this.hash(key);
    let index = 0;
    while (this.table[pos][index] != key) {
      if (this.table[pos][index] !== undefined) {
        return this.table[pos][index]
      } else {
        return undefined;
      }
      index++;
    }
  }
}

// 利用线性探测技术解决冲突的哈希表。
class HashTableLinerP extends HashTable {

  constructor() {
    super();
    this.values = new Array();
  }

  put(key, data) {
    const pos = this.hash(key);
    if (this.table[pos] === undefined) {
      this.table[pos] = key;
      this.values[pos] = data;
    } else {
      while (this.table[pos] !== undefined) {
        pos++;
      }
      this.table[pos] = key;
      this.values[pos] = data;
    }
  }

  get(key) {
    const hash = this.hash(key);
    if (hash > -1) {
      for (let i = hash; this.table[i] !== undefined; i++) {
        if (this.table[i] === key) {
          return this.values[i];
        }
      }
    }
    return undefined;
  }

  showDistro() {
    for (const key in this.table) {
      if (this.table[key] !== undefined) {
        console.log(key, ' : ', this.values[key]);
      }
    }
  }

}